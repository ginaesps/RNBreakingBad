import axios from 'axios';

const baseUrl = 'https://www.breakingbadapi.com/api/';
const breakingBadApi = axios.create({baseUrl});

export default breakingBadApi;
