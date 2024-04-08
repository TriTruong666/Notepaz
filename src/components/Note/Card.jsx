import React from "react";
import '../../styles/Card.css';
class Card extends React.Component {
    render() {
        const { note, onClick, onDelete } = this.props;
        return (
            <div className="card" onClick={onClick}>
                <div className="card-container">
                    <strong>{note.title || "Untitled"}</strong>
                    <span className="text">{note.content || "Empty"}</span>
                    <span className="material-symbols-outlined" onClick={onDelete}>
                        delete
                    </span>
                </div>
            </div>
        );
    }
}
export default Card;