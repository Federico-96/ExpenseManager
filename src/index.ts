import * as express from "express";
import cashInRouter from './routers/cashIn/cashIn.router';
import fuelRouter from './routers/fuel/fuel.router';
import travelRouter from './routers/travel/travel.router'

const server = express.default();
server.use(express.json());

server.use('/fuel', fuelRouter);
server.use('/travel', travelRouter);
server.use('/cashIn', cashInRouter);


const PORT = 8080;
server.listen(PORT, ()=> {
    console.log(`server listen on address: http://localhost:${PORT}`)
});
 