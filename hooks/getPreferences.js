import { useEffect, useState } from 'react';
import preferences from "../api/preferences";

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async (googleId) => {
        console.log("Calling preferences API");
        try {
            const response = await preferences.get('', {
                headers: {
                    googleId: googleId
                }
            });
            console.log("preferences API called");
            console.log(response);
            setResults(response.data);
        } catch(err) {
            console.log("Error:", err);
        }
    };

    // set initial search results
    useEffect(() => {
        searchApi(googleId);
    }, []);

    return [searchApi, results]
}