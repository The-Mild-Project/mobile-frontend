import { useEffect, useState } from 'react';
import recs from "../api/recs";
import Storage from '../utility/Storage'

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        let storage = new Storage();
        storage.retrieve("googleId").then(async (googleId) => {
            console.log(googleId);
            try {
                const response = await recs.get('/get', {
                    headers: {
                        googleId: googleId
                    }
                });
                console.log(response.data);
                setResults(response.data);
            } catch (err) {
                console.log("Error:", err);
            }
        });
    };

    // set initial search results
    useEffect(() => {
        searchApi();
    }, []);

    return [searchApi, results]
}