/* eslint-disable max-len */
import { Request, Response } from 'express';
import * as authService from './auth.service';

export const login = async function (req: Request, res: Response){
    try {
        const body = {
            email: req.body.email,
            password: req.body.password,
            returnSecureToken: true
        };
        const response = await authService.login(body);
        res.json(response.data);
    } catch (error) {
        throw new Error(error as any);
    }
};


/** nel service
 * login(userCredentials: any)
 */