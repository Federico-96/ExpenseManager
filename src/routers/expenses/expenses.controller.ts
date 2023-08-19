import { Request, Response } from 'express';
import * as expensesService from './expenses.service';


// CREAT
export const createExpenses = async function (req: Request, res: Response) {
    try {
        const token = req.headers.authorization!.split(' ')[1];
        const expenses = await expensesService.create(req.body, token);
        res.json(expenses.data.name);
    } catch (error) {
        res.status(400).json(error);
    }
};

// GET ALL
export const getAllExpenses = async function (req: Request, res: Response) {
    try {
        const token = req.headers.authorization!.split(' ')[1];
        const expensesArray = await expensesService.getAll(token);
        res.json(expensesArray);
    } catch (error) {
        res.status(400).json(error);
    }
};

//GET BY ID
export const getExpensesByID = async function (req: Request, res: Response) {
    try {
        const token = req.headers.authorization!.split(' ')[1];
        const expensesByID = await expensesService.getByID(req.params.ID, token);
        res.json(expensesByID);
    } catch (error) {
        res.status(400).json(error);
    }
};

//UPDATE
export const updateExpenses = async function (req: Request, res: Response) {
    try {
        const token = req.headers.authorization!.split(' ')[1];
        const responseExpenses = await expensesService.updateByID(req.params.ID, req.body, token);
        res.json(responseExpenses.data);
    } catch (error) {
        res.status(400).json(error);
    }
};

//DELETE
export const deleteExpenses = async function (req: Request, res: Response) {
    try {
        const token = req.headers.authorization!.split(' ')[1];
        const deleted = await expensesService.deleteByID(req.params.ID, token);
        res.json(deleted);
    } catch (error) {
        res.status(400).json(error);
    }
};
