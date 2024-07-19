import React, { Component } from 'react';
import AddNote from './components/AddNote';
import SearchBar from './components/SearchBar';
import NoteList from './components/NoteList';
import ArchivedNotes from './components/ArchivedNotes';
// import './App.css';
// import './Button.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, title: 'First Note', body: 'This is the first note.', archived: false, createdAt: '2024-07-01T12:34:56Z' },
        { id: 2, title: 'Second Note', body: 'This is the second note.', archived: true, createdAt: '2024-07-02T12:34:56Z' },
        { id: 3, title: 'Third Note', body: 'This is the third note.', archived: false, createdAt: '2024-07-03T12:34:56Z' }
      ],
      searchQuery: '',
      showArchived: false
    };
  }

  handleAddNote = (note) => {
    this.setState(prevState => ({
      notes: [...prevState.notes, { ...note, id: Date.now() }]
    }));
  };

  handleDeleteNote = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  handleArchiveNote = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    }));
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  toggleArchived = () => {
    this.setState(prevState => ({ showArchived: !prevState.showArchived }));
  };

  render() {
    const { notes, searchQuery, showArchived } = this.state;

    const filteredNotes = notes.filter(note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const archivedNotes = filteredNotes.filter(note => note.archived);
    const activeNotes = filteredNotes.filter(note => !note.archived);

    return (
      <div className="App">
        <AddNote onAdd={this.handleAddNote} />
        <SearchBar searchQuery={searchQuery} onSearch={this.handleSearch} />
        <button onClick={this.toggleArchived}>
          {showArchived ? 'Show All Notes' : 'Show Archived Notes'}
        </button>
        {showArchived ? (
          <ArchivedNotes archivedNotes={archivedNotes} onDelete={this.handleDeleteNote} onArchive={this.handleArchiveNote} />
        ) : (
          <NoteList notes={activeNotes} onDelete={this.handleDeleteNote} onArchive={this.handleArchiveNote} />
        )}
      </div>
    );
  }
}

export default App;
