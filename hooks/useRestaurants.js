import { useEffect, useState } from 'react';
import axios from "axios";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        const response = await yelp.get('');
        setResults(response.data);
    };

    // set initial search results
    useEffect(() => {
        searchApi("all");
    }, []);

    return [searchApi, results]
}