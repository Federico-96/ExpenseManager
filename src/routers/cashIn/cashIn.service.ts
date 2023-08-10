import axios from 'axios';
import UTILS from '../../utils/utils';

const baseUrl = process.env.BASE_URL_DATABASE;

export const create = async (bodyReq: object) => {
    return await axios.post(`${baseUrl}cashin.json`, bodyReq); 
};

export const getByID = async (id: string) => {
    const cashInByID = await axios.get(`${baseUrl}cashin/${id}.json`);
    return cashInByID.data;
};


export const getAll = async () => {
    const allCashIn = await axios.get(`${baseUrl}cashin.json`);
    return UTILS.trasfpormEntityToArray(allCashIn.data);

};

export const updateByID =async (id: string, bodyReq: object) => {
    const updateCashInByID = await axios.get(`${baseUrl}cashin/${id}.json`);
    const bodyPUT = { ...updateCashInByID.data, ...bodyReq };
    return await axios.put(`${baseUrl}cashin/${id}.json`, bodyPUT);
};

export const deleteByID =async (id: string) => {
    await axios.delete(`${baseUrl}cashin/${id}.json`);
    return `record with ID: ${id} was deleted`;
};

export const getTotResidue =async () => {
    const cashIn = await axios.get(`${baseUrl}cashin.json`);
    const arrayCashIn = UTILS.trasfpormEntityToArray(cashIn.data);
    const sumOfCashIn = UTILS.sumAttributeOfObj(arrayCashIn);

    const expenses = await axios.get(`${baseUrl}expenses.json`);
    const expensesTravel = UTILS.trasfpormEntityToArray(expenses.data);
    const sumOfExpenses = UTILS.sumAttributeOfObj(expensesTravel);

    return sumOfCashIn - sumOfExpenses;
};

        // GET ALL 
        // if (Object.prototype.hasOwnProperty.call(response.data, '-NbECVRYvEXPV79iu4ji')) { 
        // controlla se esiste uyna proprietà all'interno di un oggetto
        //     console.log(true)
        // } else {
        //   console.log(false)
        // }