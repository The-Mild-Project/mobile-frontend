import { useEffect, useState } from 'react';
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const searchApi = async (type, loc) => {
        try {
            const response = await yelp.get('', {
                params: {
                    zip: loc,
                    type: type
                }
            });
            setResults(response.data);
        } catch(err) {
            console.log(err)
        }
    };

    // set initial search results
    useEffect(() => {
        searchApi("all", "94122");
    }, []);

    return [searchApi, results]
}