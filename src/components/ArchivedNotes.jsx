import React, { Component } from 'react';
// import NoteCard from '../NoteCard';
import NoteCard from './NoteCard';

class ArchivedNotes extends Component {
    render() {
        const { archivedNotes, onDelete, onArchive } = this.props;
        if (archivedNotes.length === 0) {
            return <p>Tidak ada catatan</p>;
        }
        return (
            <div className="note-container">
                {archivedNotes.map(note => (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                ))}
            </div>
        );
    }
}

export default ArchivedNotes;
