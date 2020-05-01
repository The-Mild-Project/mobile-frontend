import { useEffect, useState } from 'react';
import axios from "axios";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async type => {
        try {
        const response = await yelp.get('', {
            params: {
                zip:'94010',
                type
            }
            });
        console.log(response)
        setResults(response.data);
    } catch(err) {
        console.log(err)
        }
    };

    // set initial search results
    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results]
}