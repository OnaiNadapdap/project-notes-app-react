import React, { Component } from 'react';
// import '.public/style.css';

class NoteCard extends Component {
    handleDelete = () => {
        this.props.onDelete(this.props.note.id);
    }

    handleArchive = () => {
        this.props.onArchive(this.props.note.id);
    }

    render() {
        const { title, body, createdAt, archived } = this.props.note;
        return (
            <div className="note-card">
                <h2 className="note-title">{title}</h2>
                <p className="note-date">{new Date(createdAt).toLocaleDateString()}</p>
                <p className="note-body">{body}</p>
                <div className="note-actions">
                    <button className="note-button" onClick={this.handleDelete}>Delete</button>
                    <button className="note-button" onClick={this.handleArchive}>
                        {archived ? 'Unarchive' : 'Archive'}
                    </button>
                </div>
            </div>
        );
    }
}

export default NoteCard;
