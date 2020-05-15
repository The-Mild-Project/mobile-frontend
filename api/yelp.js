import axios from 'axios';

export default axios.create({
   baseURL: 'http://localhost:8080/test/restaurant/all'
});