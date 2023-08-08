import axios from "axios";
import UTILS from "../../utils/utils";

export const getAll = async ()=>{
    const allExpenses = await axios.get('https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/expenses.json?orderBy="date"&startAt=-1000');
    return UTILS.trasfpormEntityToArray(allExpenses.data);
}

export const getByID = async (id: string)=>{
    const expensesByID = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`);
    return expensesByID.data;
}