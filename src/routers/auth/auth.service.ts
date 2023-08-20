import axios from 'axios';
import {Authentication} from './auth.model';

const apiKey = process.env.API_KEY;

export const login = async (userCredentials: Authentication) => {
    const loginFirebase = await axios.post(`${apiKey}`, userCredentials);
    return loginFirebase;
    };