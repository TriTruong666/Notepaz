import { useState } from "react";
import "../../styles/dashboard.css";
import Card from "./Card";
import { Link } from "react-router-dom";
const Dashboard = ({
  addNewNote,
  notes,
  deleteNote,
  setActiveNote,
  activeNote,
}) => {
  const [query, setQuery] = useState("");
  return (
    <section className="dashboard">
      <div className="container">
        <Link to="/" className="header-text">
          Notepaz Website
        </Link>
        <div className="search-box">
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <button className="submitBtn" type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className="line"></div>
        <button className="addBtn" onClick={addNewNote}>
          <span className="material-symbols-outlined">post_add</span>
          <span className="add-text">New Note</span>
        </button>
        <div className="cards">
          {notes
            .filter((note) => note.title.toLowerCase().includes(query)) // Filter notes based on query
            .map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
                setActiveNote={() => setActiveNote(note.id)}
                activeNote={activeNote}
                deleteNote={() => deleteNote(note.id)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
