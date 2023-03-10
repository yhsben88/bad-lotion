import { Link } from "react-router-dom";



const Note = () => {

    return ( 
    <>
        <div>Title area</div>
        <div>date area</div>
        <Link to="/note/:id/edit">Edit</Link>
        <button>Delete</button>

        <p>temp text for view page</p>
    </> 
    );
}
 
export default Note;