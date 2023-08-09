import axios from 'axios';
import UTILS from '../../utils/utils';
import { EntityExpenses } from './expenses.model';

const baseUrl = process.env.BASE_URL_DATABASE;

export const create = async (bodyReq: object) => {
    return await axios.post(`${baseUrl}expenses.json`, bodyReq);
};

export const getAll = async (): Promise<EntityExpenses[]> => {
    const url = `${process.env.BASE_URL_DATABASE}expenses.json?orderBy="date"&startAt=-1000`;
    const allExpenses = await axios.get(url);
    return UTILS.trasfpormEntityToArray(allExpenses.data);
};

export const getByID = async (id: string) => {
    const expensesByID = await axios.get(`${baseUrl}expenses/${id}.json`);
    return expensesByID.data;
};

export const updateByID = async (id: string, bodyReq: object) => {
    const expensesByID = await axios.get(`${baseUrl}expenses/${id}.json`);
    const newExpenses = { ...expensesByID.data, ...bodyReq };
    return await axios.put(`${baseUrl}expenses/${id}.json`, newExpenses);
};

export const deleteByID = async (id: string) => {
    await axios.delete(`${baseUrl}expenses/${id}.json`);
    return `record with ID: ${id} was deleted`;
};