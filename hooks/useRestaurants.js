import { useEffect, useState } from 'react';
import axios from "axios";

export default () => {
    const [results, setResults] = useState([]);
    const searchApi = async (searchTerm) => {
        const response = await getRestaurantFromBackend();
        setResults(response.data);
    };

    // set initial search results
    useEffect(() => {
        searchApi("all");
    }, []);

    async function getRestaurantFromBackend() {
        axios.get('https://foodapp-user-service.herokuapp.com/test/restaurant/all', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            // log user in
            console.log(response)
        }).catch(function (error) {
            // send user back to login page and clear local storage
            console.log(error);
        })
    }

    return [searchApi, results]
}