import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.LMS_API_BASE_URL || 'http://localhost:3089/lms/api',
  crossDomain: true
});
export default instance;
