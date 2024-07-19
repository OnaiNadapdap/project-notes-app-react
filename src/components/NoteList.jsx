import React, { Component } from 'react';
import NoteCard from './NoteCard';
// import NoteCard from './NoteCard';

class NoteList extends Component {
  render() {
    const { notes, onDelete, onArchive } = this.props;
    const activeNotes = notes.filter(note => !note.archived);
    if (notes.length === 0) {
      return <p>Tidak ada catatan</p>;
    }
    return (
      <div className="note-container">
        {activeNotes.map(note => (
          <NoteCard 
            key={note.id} 
            note={note} 
            onDelete={onDelete} 
            onArchive={onArchive} 
          />
        ))}
      </div>
    );
  //   return (
  //     <div className="note-container">
  //       {notes.map(note => (
  //         <NoteCard 
  //           key={note.id} 
  //           note={note} 
  //           onDelete={onDelete} 
  //           onArchive={onArchive} 
  //         />
  //       ))}
  //     </div>
  //   );
  }
}

export default NoteList;
