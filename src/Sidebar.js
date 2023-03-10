import { Link } from "react-router-dom";


const Sidebar = ({notes, title, handleDelete}) => {
    return (
        <>
            <div className="sidebar-title-area">
                <h2>{title}</h2>
                <button id="add-note-button">&#43;
                </button>
            </div>
            <div className="sidebar-list">
                {notes.map((note) => (
                    <div className="note-preview" key={note.id}>
                        <Link to={`/notes/${note.id}`}>
                            <h2>{note.title}</h2>
                            <p>{note.lastUpdated}</p>
                        </Link>
                        <div className="sidebar-note-delete">
                            <button onClick={() => handleDelete(note.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Sidebar;