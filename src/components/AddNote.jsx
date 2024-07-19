import React, { Component } from 'react';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            error: '',
        };
    }

    //ini bisa untuk dapat input apapun
    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    //handle input body
    handleBodyChange = (e) => {
        this.setState({ body: e.target.value });
    };

    //handle input title dan tidak lebih dari 50 charater
    handleTitleChange = (e) => {
        const title = e.target.value;
        if (title.length <= 50) {
            this.setState({ title, error: '' });
        } else {
            this.setState({ error: 'Title cannot be more than 50 characters.' });
        }
    };
    //handle submit event dan title kosong
    handleSubmit = (e) => {
        e.preventDefault();
        const { title, body } = this.state;
        if (title.length === 0 && body.length === 0) {
            this.setState({ error: 'Title and Body is required.' });
        }
        else if (title.length === 0) {
            this.setState({ error: 'Title is required.' });
        } else if (body.length === 0) {
            this.setState({ error: 'Body is required.' });
        } else {
            this.props.onAdd({ title, body, archived: false, createdAt: new Date().toISOString() });
            this.setState({ title: '', body: '', error: '' });
        }
    };
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { title, body } = this.state;
    //     if (title && body) {
    //         this.props.onAdd({
    //             title,
    //             body,
    //             archived: false,
    //             createdAt: new Date().toISOString()
    //         });
    //         this.setState({ title: '', body: '' });
    //     }
    // }

    render() {
        const { title, body, error } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="add-note-form">
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleTitleChange}
                    placeholder="Title"
                // required
                />
                <textarea
                    name="body"
                    value={body}
                    onChange={this.handleBodyChange}
                    placeholder="Body"
                // required
                />
                {error && <p className="error-message">{error}</p>}

                <button type="submit">Add Note</button>
            </form>
        );
    }
}

export default AddNote;
