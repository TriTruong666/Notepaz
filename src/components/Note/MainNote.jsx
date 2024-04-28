import "../../styles/MainNote.css";
import { useEffect, useState } from "react";

const MainNote = ({ activeNote, updateNote }) => {
  const onChangeInput = (key, value) => {
    updateNote({
      ...activeNote,
      [key]: value,
    });
  };

  if (!activeNote) {
    return (
      <div className="no-active-note">
        <h2>No Active Note</h2>
      </div>
    );
  }

  return (
    <section className="main-note">
      <form autoComplete="off" className="container" action="" method="post">
        <input
          className="heading-input"
          name="title"
          maxLength="69"
          type="text"
          placeholder="heading here..."
          value={activeNote.title}
          onChange={(e) => onChangeInput("title", e.target.value)}
        />
        <div className="time">
          <span className="material-symbols-outlined">linear_scale</span>
          <span>#{activeNote.id}</span>
        </div>
        <div className="line"></div>
        <main>
          <textarea
            className="text-input"
            name="content"
            id=""
            placeholder="note here..."
            value={activeNote.content}
            onChange={(e) => onChangeInput("content", e.target.value)}
          ></textarea>
        </main>
      </form>
    </section>
  );
};
export default MainNote;
