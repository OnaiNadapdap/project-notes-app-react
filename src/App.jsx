import React, { Component } from 'react';
import AddNote from './components/AddNote';
import SearchBar from './components/SearchBar';
import NoteList from './components/NoteList';
import ArchivedNotes from './components/ArchivedNotes';
// import './style.css';

// aplikasi utama note book
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
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

        const archivedNotes = notes.filter(note => note.archived);

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
                    <NoteList notes={filteredNotes} onDelete={this.handleDeleteNote} onArchive={this.handleArchiveNote} />
                )}
            </div>
        );
    }
}

export default App;
