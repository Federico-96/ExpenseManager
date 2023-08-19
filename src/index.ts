import dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import cashInRouter from './routers/cashIn/cashIn.router';
import expensesRouter from './routers/expenses/expenses.router';
import authRouter from './routers/auth/auth.router';

const server = express.default();
server.use(express.json());


// eslint-disable-next-line @typescript-eslint/no-unused-vars
// server.use((req, res, next)=>{
//     console.log('middleware');


//     next();
//    });


server.use('/cashin', cashInRouter);
server.use('/expenses', expensesRouter);
server.use('/auth', authRouter);


const PORT = process.env.PORT || '3000';
server.listen(PORT, ()=> {
    console.log(`server listen on address: http://localhost:${PORT}`);
});
 