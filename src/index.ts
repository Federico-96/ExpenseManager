import dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import cashInRouter from './routers/cashIn/cashIn.router';
import expensesRouter from './routers/expenses/expenses.router';


const server = express.default();
server.use(express.json());

// server.use('/fuel', fuelRouter);
// server.use('/travel', travelRouter);
server.use('/cashin', cashInRouter);
server.use('/expenses', expensesRouter);


const PORT = process.env.PORT || '3000';
server.listen(PORT, ()=> {
    console.log(`server listen on address: http://localhost:${PORT}`);
});
 