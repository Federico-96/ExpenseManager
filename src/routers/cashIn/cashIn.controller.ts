import cashInMock from "./cashIn.mock";
import { CashIn } from "./cashIn.model";

export const getCashInByID = function (req: any, res: any) {
    const cashID = cashInMock.find((c)=> c.ID === req.params.ID )
    if (!!cashID) {
        res.json(cashID);
    } else {
        res.status(404).send('not found');
    }
};

export const getCashIn = function (req: Request, res: any) {
    res.json(cashInMock);
};

export const residueCashInByID = async function name(params:any) {
    console.log('remaining money by ID');
};

export const totalResidueCashIn = async function name(params:any) {
    console.log('total remaining money');
};

export const createCashIn = function (req: any, res: any) {
    const newCashIn = new CashIn (req.body.ID, req.body.amount, new Date(req.body.startDate));
    cashInMock.push(newCashIn);
    res.json(newCashIn);
};