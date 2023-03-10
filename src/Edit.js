import { Link, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();


    return ( <>
        <div>Title input area</div>
        <div>date area</div>
        <div> area for react quill thing</div>
        <Link to="/note/:id">Save</Link>
        <button>Delete</button>
        <p> temp holder for Edit page</p>
     </>
     );
}

export default Edit;   