import { useEffect, useState } from 'react';
import axios from "axios";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async (type) => {
        const response = await yelp.get('', {
            params: {
                zip:'94010',
                type:type
            }
            });
        setResults(response.data);
    };

    // set initial search results
    useEffect(() => {
        searchApi("all");
    }, []);

    return [searchApi, results]
}