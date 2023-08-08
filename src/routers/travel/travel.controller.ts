import { Request, Response } from "express";
import axios, { all } from 'axios';

//CREATE
export const creatTravel = async function (req: Request, res: Response) {
    try {
        const travel = await axios.post(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/travel.json`, req.body);
        res.json(travel.data.name)
    } catch (error) {
        res.status(400).json(error);
    }
}

//GET ALL
export const getAllTravel = async function (req: Request, res: Response) {
    try {
        const allTraver = await axios.get('https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/travel.json');
        res.json(allTraver.data);
    } catch (error) {
        res.status(400).json(error);
    }
}

//GET BY ID
export const getTravelByID = async function (req: Request, res: Response) {
    try {
        const getTravelByID = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/travel/${req.params.ID}.json`);
        res.json(getTravelByID.data)
    } catch (error) {
        res.status(400).json(error);
    }
}

//UPDATE
export const editTravel = async function (req: Request, res: Response) {
    try {
        const travelByID = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/travel/${req.params.ID}.json`);
        const newTravel = {...travelByID.data, ...req.body};
        const updareTravel = await axios.put(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/travel/${req.params.ID}.json`, newTravel);
        res.json(updareTravel.data);
    } catch (error) {
        res.status(400).json(error);
    }
}

//DELETE
export const deleteTravel = async function (req: Request, res: Response) {
    try {
        const travelByID = await axios.delete(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/travel/${req.params.ID}.json`);
        res.json(`record with ID: ${req.params.ID} was deleted`);
    } catch (error) {
        res.status(400).json(error);
    }
}