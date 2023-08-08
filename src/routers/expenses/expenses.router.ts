import * as express from 'express';
import {createExpenses, getAllExpenses, getExpensesByID, editExpenses, deleteExpenses} from './expenses.controller';

const router = express.Router();

router.post('/', createExpenses);
router.get('/', getAllExpenses);
router.get('/:ID', getExpensesByID);
router.put('/:ID', editExpenses);
router.delete('/:ID', deleteExpenses);

export default router;