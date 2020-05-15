import { useEffect, useState } from 'react';
import recs from "../api/recs";
import instance from '../utility/Storage'

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async (loc) => {
        instance.retrieve("googleId").then(async (googleId) => {
            try {
                const response = await recs.get('/get', {
                    headers: {
                        googleId: googleId
                    },
                    params: {
                        location: loc
                    }
                });
                setResults(response.data.businesses);
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