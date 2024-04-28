import "../../styles/notepaz.css";
import Dashboard from "./Dashboard";
import MainNote from "./MainNote";
import { useState, useEffect } from "react";
const Notepaz = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  useEffect(() => {
    // Load notes from localStorage on component mount
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);
  const addNewNote = () => {
    const newNote = {
      id: Math.floor(Math.random() * 1000000 + 1),
      title: "",
      content: "",
    };
    setNotes((prevNote) => [newNote, ...prevNote]);
  };
  const deleteNote = (noteId) => {
    const target = notes.filter((note) => note.id !== noteId);
    setNotes(target);
  };
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  const updateNote = (target) => {
    const array = notes.map((note) => {
      if (note.id === activeNote) {
        return target;
      }
      return note;
    });
    setNotes(array);
  };
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <main className="notepaz">
      <Dashboard
        notes={notes}
        addNewNote={addNewNote}
        deleteNote={deleteNote}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
      />
      <MainNote activeNote={getActiveNote()} updateNote={updateNote} />
    </main>
  );
};
export default Notepaz;
