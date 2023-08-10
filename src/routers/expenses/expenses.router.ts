import * as express from 'express';
import * as expensesController from './expenses.controller';

const router = express.Router();

router.post('/', expensesController.createExpenses);
router.get('/', expensesController.getAllExpenses);
router.get('/:ID', expensesController.getExpensesByID);
router.put('/:ID', expensesController. updateExpenses);
router.delete('/:ID', expensesController.deleteExpenses);
// router.get('/bycashin');

export default router;