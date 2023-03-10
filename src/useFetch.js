import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then( response => {
            if(!response.ok) {
                throw Error('could not fetch data from the given resource');
            }
            return response.json();
            })
            .then( data => {
            setIsPending(false);
            setData(data);
            setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                }    
                else{
                    setError(err.message);
                    setIsPending(false);
                }
            })

        return () => abortCont.abort();
    }, [url]);

    return { error, isPending, data };
}

export default useFetch;