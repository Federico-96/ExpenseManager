import axios from 'axios';
import UTILS from '../../utils/utils';

const baseUrl = process.env.BASE_URL_DATABASE;

export const create = async (bodyReq: object, idToken: string) => {
    return await axios.post(`${baseUrl}cashin.json`, bodyReq, {params: {auth: idToken}}); 
};

export const getByID = async (id: string, idToken: string) => {
    const cashInByID = await axios.get(`${baseUrl}cashin/${id}.json`, {params: {auth: idToken}});
    return cashInByID.data;
};


export const getAll = async (idToken: string) => {
    const allCashIn = await axios.get(`${baseUrl}cashin.json`, {params: {auth: idToken}});
    return UTILS.trasfpormEntityToArray(allCashIn.data);

};

export const updateByID = async (id: string, bodyReq: object, idToken: string) => {
    const updateCashInByID = await axios.get(`${baseUrl}cashin/${id}.json`, {params: {auth: idToken}});
    const bodyPUT = { ...updateCashInByID.data, ...bodyReq };
    return await axios.put(`${baseUrl}cashin/${id}.json`, bodyPUT, {params: {auth: idToken}});
};

export const deleteByID = async (id: string, idToken: string) => {
    await axios.delete(`${baseUrl}cashin/${id}.json`, {params: {auth: idToken}});
    return `record with ID: ${id} was deleted`;
};

export const getTotResidue = async (idToken: string) => {
    const cashIn = await axios.get(`${baseUrl}cashin.json`, {params: {auth: idToken}});
    const arrayCashIn = UTILS.trasfpormEntityToArray(cashIn.data);
    const sumOfCashIn = UTILS.sumAttributeOfObj(arrayCashIn);

    const expenses = await axios.get(`${baseUrl}expenses.json`, {params: {auth: idToken}});
    const expensesTravel = UTILS.trasfpormEntityToArray(expenses.data);
    const sumOfExpenses = UTILS.sumAttributeOfObj(expensesTravel);

    return sumOfCashIn - sumOfExpenses;
};

export const getResidueByID =async (id: string, idToken: string) => {
    // eslint-disable-next-line max-len
    const cashInID = await axios.get(`${baseUrl}cashin/${id}.json`, {params: {auth: idToken}});
    // const params = {orderBy: '"cashInID"', equalTo: `"${id}"`, auth: y};
    // eslint-disable-next-line max-len
    // const expensesByCashIn = await axios.get(`${baseUrl}expenses.json?orderBy="cashInID"&equalTo="${id}"`, {params: });
    const expensesByCashIn = await axios.get(`${baseUrl}expenses.json`, {params: {auth: idToken}});
    const arrayExpenses = UTILS.trasfpormEntityToArray(expensesByCashIn.data);
    const sumExpenses = UTILS.sumAttributeOfObj(arrayExpenses);
    return (cashInID.data.amount - sumExpenses);
};

        // GET ALL 
        // if (Object.prototype.hasOwnProperty.call(response.data, '-NbECVRYvEXPV79iu4ji')) { 
        // controlla se esiste una proprietà all'interno di un oggetto
        //     console.log(true)
        // } else {
        //   console.log(false)
        // }