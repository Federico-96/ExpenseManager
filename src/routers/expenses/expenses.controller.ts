import { Request, Response } from 'express';
import axios from 'axios';
import * as expensesService from './expenses.service';

// CREAT
export const createExpenses = async function (req: Request, res: Response) {
    try {
        const espenses = await axios.post(
            'https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
            req.body
        );
        res.json(espenses.data.name);
    } catch (error) {
        res.status(400).json(error);
    }
};

// GET ALL
export const getAllExpenses = async function (req: Request, res: Response) {
    try {
        const expensesArray = await expensesService.getAll();
        res.json(expensesArray);
    } catch (error) {
        res.status(400).json(error);
    }
};

//GET BY ID
export const getExpensesByID = async function (req: Request, res: Response) {
    try {
        const expensesByID = await expensesService.getByID(req.params.ID);
        res.json(expensesByID);
    } catch (error) {
        res.status(400).json(error);
    }
};

//UPDATE
export const editExpenses = async function (req: Request, res: Response) {
    try {
        const expensesByID = await axios.get(
            `https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/expenses/${req.params.ID}.json`
        );
        const newExpenses = { ...expensesByID.data, ...req.body };
        const responseExpenses = await axios.put(
            `https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/expenses/${req.params.ID}.json`,
            newExpenses
        );
        res.json(responseExpenses.data);
    } catch (error) {
        res.status(400).json(error);
    }
};

//DELETE
export const deleteExpenses = async function (req: Request, res: Response) {
    try {
        await axios.delete(
            `https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/expenses/${req.params.ID}.json`
        );
        res.json(`record with ID: ${req.params.ID} was deleted`);
    } catch (error) {
        res.status(400).json(error);
    }
};
