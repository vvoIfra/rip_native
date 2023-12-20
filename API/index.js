import axios from 'axios';

const IP = '192.168.210.33'
export const axiosInstance = axios.create({ baseURL: `http://192.168.210.33:8000/` });