/* eslint-disable max-len */
import axios from 'axios';
import { Request, Response } from 'express';
export const login = async function (req: Request, res: Response){
    try {
        const body = {
            email: req.body.email,
            password: req.body.password,
            returnSecureToken: true
        };
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwDD4ZFu8Dzr6Ydf6kR2bdOHGjQpoIJKk', body);
        res.json(response.data);
    } catch (error) {
        throw new Error(error as any);
    }
};


/** nel service
 * login(userCredentials: any)
 */