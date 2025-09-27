import axios from "axios";
import Config from "react-native-config";

const API_URL = Config.API_URL
const API_KEY = Config.API_KEY

export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: { 
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${API_KEY}`
  },
});