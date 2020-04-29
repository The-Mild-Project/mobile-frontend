import axios from 'axios';

export default axios.create({
   baseURL: 'https://foodapp-user-service.herokuapp.com/test/restaurant/all',
    headers : {
        'Content-Type': 'application/json',
        'X-Total-Count': 20,
        'Access-Control-Allow-Origin': true
    }
});