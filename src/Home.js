import useFetch from './useFetch';

const Home = () => {
    const { data } = useFetch("http://localhost:8000/notes");

    return ( 
        <div>
            <p>{data}</p>
            <p> temp text for blank page </p>
        </div>
     );
}
 
export default Home;