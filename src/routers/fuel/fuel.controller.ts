import { Request, Response } from "express";
import axios, { all } from 'axios';

// CREAT
export const createFuel = async function (req: Request, res: Response) {
    try {
        const response = await axios.post('https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/fuel.json', req.body);
        res.json(response.data.name);
    } catch (error) {
        res.status(400).json(error);
    }
}

// GET ALL
export const getAllFuel = async function (req: Request, res: Response) {
    try {
        const allFuel = await axios.get('https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/fuel.json');
        const fuelArray = [];
        for (const key in allFuel.data) {
            fuelArray.push({
                ID: key,
                ...allFuel.data[key]
            })
        }
        res.json(fuelArray);
    } catch (error) {
        res.status(400).json(error);
    }
}

//GET BY ID
export const getFuelByID = async function (req: Request, res: Response) {
    try {
        const fuelByID = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/fuel/${req.params.ID}.json`);
        res.json(fuelByID.data);
    } catch (error) {
        res.status(400).json(error);
    }
}

//UPDATE
export const editFuel = async function (req: Request, res: Response) {
    try {
        const fuelByID = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/fuel/${req.params.ID}.json`);
        const newFuel = {...fuelByID.data, ...req.body}
        const responseFuel = await axios.put(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/fuel/${req.params.ID}.json`, newFuel);
        res.json(responseFuel.data)
    } catch (error) {
        res.status(400).json(error);
    }
}

//DELETE
export const deleteFuel = async function (req: Request, res: Response) {
    try {
        const fuelByID = await axios.delete(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/fuel/${req.params.ID}.json`)
        res.json(`record with ID: ${req.params.ID} was deleted`)
    } catch (error) {
        res.status(400).json(error);
    }    
}