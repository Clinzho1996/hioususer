/* eslint-disable prettier/prettier */
import axios from 'axios';

const ApiManagerReset = axios.create({
  baseURL: 'https://hiousapp.com/api/user_auth',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManagerReset;
