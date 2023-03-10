import { useParams, Link } from "react-router-dom";
import useFetch from './useFetch';


const Note = () => {
    const { data: notes, isPending, error } = useFetch("http://localhost:8000/notes");

    const { id } = useParams();
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