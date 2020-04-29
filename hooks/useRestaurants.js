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

    async function getRestaurantFromBackend() {
        const response = await axios.get('https://foodapp-user-service.herokuapp.com/test/restaurant/all', {
            headers: {
                'Content-Type': 'application/json',
                'X-Total-Count': 20,
                'Access-Control-Allow-Origin': true
            }});
        return response.json();
    }

    return [searchApi, results]
}