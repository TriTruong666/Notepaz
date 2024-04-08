import React from "react";
import '../../styles/MainNote.css';

class MainNote extends React.Component {
    state = {
        title: "",
        content: "",
    };

    componentDidUpdate(prevProps) {
        const { currentNote } = this.props;
        if (currentNote && currentNote.id !== prevProps.currentNote?.id) {
            this.setState({
                title: currentNote.title,
                content: currentNote.content
            });
        }
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { title, content } = this.state;
        this.props.updateNote({
            id: this.props.currentNote.id,
            title,
            content
        })
    }
    render() {
        const { currentNote } = this.props;
        if (!currentNote) {
            return null; // or you can render a placeholder or loading message
        }
        return (
            <section className="main-note">
                <form autoComplete="off" className="container" action="" onClick={this.handleSubmit}>
                    <input
                        className="heading-input"
                        name="title"
                        maxLength="69"
                        type="text"
                        placeholder='heading here...'
                        value={this.state.title || ""}
                        onChange={(event) => this.handleInputChange(event)}
                    />
                    <div className="time">
                        <span className="material-symbols-outlined">
                            linear_scale
                        </span>
                        <span>ID: #{currentNote.id}</span>
                    </div>
                    <div className="line"></div>
                    <main>
                        <textarea
                            className="text-input"
                            name="content"
                            id=""
                            placeholder='note here...'
                            value={this.state.content || ""}
                            onChange={(event) => this.handleInputChange(event)}
                        >
                        </textarea>
                        <button type="submit">
                            <span className="material-symbols-outlined">
                                save
                            </span>
                            <span>Save Note</span>
                        </button>
                    </main>
                </form>
            </section>
        )
    }
}
export default MainNote;