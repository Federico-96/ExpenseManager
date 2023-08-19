import axios from 'axios';
import UTILS from '../../utils/utils';
import * as serviceCashIn from '../cashIn/cashIn.service';
import { EntityExpenses, Expenses } from './expenses.model';
import { EntityCashIn } from '../cashIn/cashIn.model';

const baseUrl = process.env.BASE_URL_DATABASE;

export const create = async (bodyReq: Expenses, idToken: string) => {
    const expenses = await axios.post(`${baseUrl}expenses.json`, bodyReq, {params: {auth: idToken}});
    const checkCashIn = await axios.get<EntityCashIn>(`${baseUrl}cashin/${bodyReq.cashInID}.json`, 
    {params: {auth: idToken}});
    if (checkCashIn.data.residue > 0) { // verifica che il bonifico indicato per la spesa abbia ancora budget
        if (checkCashIn.data.residue - bodyReq.amount < 0) {

            const cashInDate = new Date(checkCashIn.data.startDate);
            cashInDate.setMonth(cashInDate.getMonth() + 1);
            const queryFilter = `?orderBy="startDate"&equalTo="${UTILS.getDateFormatted(cashInDate)}"`;
            const cashInByPeriods = await axios.get<EntityCashIn>(`${baseUrl}cashin.json${queryFilter}`, 
            {params: {auth: idToken}});
            const cashInByPeriod = UTILS.trasfpormEntityToArray(cashInByPeriods.data)[0];

            const partResidue = bodyReq.amount - checkCashIn.data.residue;
            const newResidue = cashInByPeriod.residue - partResidue;

            await serviceCashIn.updateByID(
                bodyReq.cashInID, 
                { residue: 0, active: false, endDate: bodyReq.date}, 
                idToken);
            await serviceCashIn.updateByID(cashInByPeriod.ID, {...cashInByPeriod, residue: newResidue}, idToken);
            
        } else {
            const residue = checkCashIn.data.residue - bodyReq.amount;
            await serviceCashIn.updateByID(bodyReq.cashInID, {residue: residue}, idToken);
        }
    } else {
        throw new Error('the residue for this period is equal 0');
        
    }
    return expenses;
};

export const getAll = async (idToken: string): Promise<EntityExpenses[]> => {
    const url = `${process.env.BASE_URL_DATABASE}expenses.json?orderBy="date"&startAt=-1000`;
    const allExpenses = await axios.get(url, {params: {auth: idToken}});
    return UTILS.trasfpormEntityToArray(allExpenses.data);
};

export const getByID = async (id: string, idToken: string) => {
    const expensesByID = await axios.get(`${baseUrl}expenses/${id}.json`, {params: {auth: idToken}});
    return expensesByID.data;
};

export const updateByID = async (id: string, bodyReq: object, idToken: string) => {
    const expensesByID = await axios.get(`${baseUrl}expenses/${id}.json`, {params: {auth: idToken}});
    const newExpenses = { ...expensesByID.data, ...bodyReq };
    return await axios.put(`${baseUrl}expenses/${id}.json`, newExpenses, {params: {auth: idToken}});
};

export const deleteByID = async (id: string, idToken: string) => {
    await axios.delete(`${baseUrl}expenses/${id}.json`, {params: {auth: idToken}});
    return `record with ID: ${id} was deleted`;
};