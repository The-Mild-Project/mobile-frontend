import axios from 'axios';

export default axios.create({
   baseURL: 'https://foodapp-user-service.herokuapp.com/test/restaurant/all'
});