import { Request, Response } from 'express';
import * as expensesService from './expenses.service';


// CREAT
export const createExpenses = async function (req: Request, res: Response) {
    try {
        const expenses = await expensesService.create(req.body);
        res.json(expenses.data.name);
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
export const updateExpenses = async function (req: Request, res: Response) {
    try {
        const responseExpenses = await expensesService.updateByID(req.params.ID, req.body);
        res.json(responseExpenses.data);
    } catch (error) {
        res.status(400).json(error);
    }
};

//DELETE
export const deleteExpenses = async function (req: Request, res: Response) {
    try {
        const deleted = await expensesService.deleteByID(req.params.ID);
        res.json(deleted);
    } catch (error) {
        res.status(400).json(error);
    }
};
