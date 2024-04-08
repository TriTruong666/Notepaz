import React from "react";
import '../../styles/notepaz.css';
import Dashboard from "./Dashboard";
import MainNote from "./MainNote";
class Notepaz extends React.Component {
    state = {
        // array
        notes: [],
        originalNotes: [],
        currentNoteId: null
    }
    
    componentDidMount() {
        // Initialize originalNotes with the same content as notes
        const storedNotes = localStorage.getItem("notes");
        if(storedNotes){
            this.setState({
                notes: JSON.parse(storedNotes),
                originalNotes: JSON.parse(storedNotes)
            })
        }
    }
    addNewNote = () => {
        const newNote = {
            id: Math.floor((Math.random() * 1000000) + 1),
            title: "",
            content: "",
        };
        this.setState(prevState => ({
            notes: [newNote, ...prevState.notes],
            originalNotes: [newNote, ...prevState.originalNotes] // Update originalNotes
        }), this.saveToLocal);
    }
    getNoteById = (id) => {
        this.setState({
            currentNoteId: id
        })
    }
    updateNote = (object) => {
        const updatedNote = this.state.notes.map(note =>
            note.id === object.id ? object : note
        );
        this.setState({
            notes: updatedNote,
            originalNotes: updatedNote // Update originalNotes
        }, this.saveToLocal);
    }
    deleteNote = (updatedNotes) => {
        this.setState({
            notes: updatedNotes,
            originalNotes: updatedNotes // Update originalNotes
        }, this.saveToLocal);
    }
    searchNote = (filteredNotes) => {
        this.setState({
            notes: filteredNotes
        })
    }
    resetSearch = () => {
        this.setState({
            notes: this.state.originalNotes
        })
    }
    saveToLocal = () => {
        localStorage.setItem("notes", JSON.stringify(this.state.notes))
    }
    render() {
        const { notes, currentNoteId } = this.state;
        const currentNote = notes.find(note => note.id === currentNoteId)
        return (
            <main className="notepaz">
                <Dashboard
                    addNewNote={this.addNewNote}
                    notes={notes}
                    getNoteById={this.getNoteById}
                    deleteNote={this.deleteNote}
                    searchNote={this.searchNote}
                    resetSearch={this.resetSearch}
                />
                {currentNoteId && <MainNote
                    currentNote={currentNote}
                    updateNote={this.updateNote}
                />}
            </main>
        )
    }
}
export default Notepaz;
