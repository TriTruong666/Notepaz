import "../../styles/Card.css";
const Card = ({
  title,
  content,
  deleteNote,
  setActiveNote,
  activeNote,
  id,
}) => {
  return (
    <div
      className={`card ${id === activeNote && "active"}`}
      onClick={setActiveNote}
    >
      <div className="card-container">
        <strong>{title || "Title"}</strong>
        <span className="text">{content || "Content"}</span>
        <span className="material-symbols-outlined" onClick={deleteNote}>
          delete
        </span>
      </div>
    </div>
  );
};
export default Card;
