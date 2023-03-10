import useFetch from './useFetch';

const Home = () => {
    const { data: notes, isPending, error } = useFetch("http://localhost:8000/notes");

    return ( 

        <p> temp text for blank page </p>
     );
}
 
export default Home;