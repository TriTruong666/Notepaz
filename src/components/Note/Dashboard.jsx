import React from "react";
import '../../styles/dashboard.css';
import Card from "./Card";
import { Link } from 'react-router-dom';
class Dashboard extends React.Component {

    handleAddNewNote = () => {
        this.props.addNewNote()
    }
    handleOpenNote = (id) => {
        this.props.getNoteById(id);
    }
    handleDeleteNote = (id) => {
        const updatedNotes = this.props.notes.filter(note => note.id !== id);
        this.props.deleteNote(updatedNotes);
    }
    handleSearchNote = (event) => {
        const title = event.target.value.toLowerCase();
        const { notes, searchNote, resetSearch } = this.props;
        if (title.trim() === "") {
            // If search input is empty, reset the search
            resetSearch();
        } else {
            // Otherwise, filter notes based on the search query
            const filteredNotes = notes.filter(note =>
                note.title.toLowerCase().includes(title)
            );
            searchNote(filteredNotes);
        }
    }
    render() {
        const { notes } = this.props;
        return (
            <section className="dashboard">
                <div className="container">
                    <Link to='/' className="header-text">Notepaz Website</Link>
                    <div className="search-box">
                        <input
                            className="search" type="text"
                            placeholder="Search"
                            onChange={this.handleSearchNote} />
                        <button className="submitBtn" type="submit">
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                    <div className="line"></div>
                    <button className="addBtn" onClick={this.handleAddNewNote}>
                        <span className="material-symbols-outlined">
                            post_add
                        </span>
                        <span className="add-text">New Note</span>
                    </button>
                    <div className="cards">
                        {notes.map(note => (
                            <Card
                                key={note.id}
                                note={note}
                                onClick={() => this.handleOpenNote(note.id)}
                                onDelete={() => this.handleDeleteNote(note.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}
export default Dashboard;