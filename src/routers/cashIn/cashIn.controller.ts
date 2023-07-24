import cashInMock from "./cashIn.mock";
import { CashIn } from "./cashIn.model";

export const getCashInByID = function (req: any, res: any) {
    const cashID = cashInMock.find((c) => c.ID === req.params.ID)
    if (!!cashID) {
        res.json(cashID);
    } else {
        res.status(404).send('not found');
    }
};

export const getCashIn = function (req: Request, res: any) {
    res.json(cashInMock);
};

export const residueCashInByID = function (req: any, res: any) {
    const residueByID = cashInMock.find((c)=> c.ID === req.params.ID)
    if (!!residueByID) {
        res.json(residueByID.amount);
    } else {
        res.status(404).send('ID not found')
    }
};

export const totalResidueCashIn = function (req: any, res: any) {
    const residueArray = cashInMock.map((cash) => {
        let partResidue = [cash.amount]
        return partResidue
    })
    let totalResidue = 0;
    residueArray.forEach((element) => {
        totalResidue += element[0]
    })
    res.json(totalResidue);
}

export const createCashIn = function (req: any, res: any) {
    const newCashIn = new CashIn(req.body.ID, req.body.amount, new Date(req.body.startDate));
    cashInMock.push(newCashIn);
    res.json(newCashIn);
};