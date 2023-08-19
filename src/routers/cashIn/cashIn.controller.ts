import { Request, Response } from 'express';
import * as cashInService from './cashIn.service';


// CREATE
export const createCashIn = async function (req: Request, res: Response) {
  try {
    const token = req.headers.authorization!.split(' ')[1];
    const cashIn = await cashInService.create(req.body, token);
    res.json(cashIn.data.name);
  } catch (error) {
    res.status(400).json(error);
  }
};

//GET ALL
export const getCashIn = async function (req: Request, res: Response) {
  try {
    const token = req.headers.authorization!.split(' ')[1];
    const allCashIn = await cashInService.getAll(token);
    res.json(allCashIn);
  } catch (error) {
    res.status(400).json(error);
  }
};

// GET BY ID
export const getCashInByID = async function (req: Request, res: any) {
  try {
    const token = req.headers.authorization!.split(' ')[1];
    const cashInByID = await cashInService.getByID(req.params.ID, token);
    res.json(cashInByID);
  } catch (error) {
    res.status(400).json(error);
  }
};

//UPDATE
export const updateCashIn = async function (req: Request, res: Response) {
  try {
    const token = req.headers.authorization!.split(' ')[1];
    const updateByID = await cashInService.updateByID(req.params.ID, req.body, token);
    res.json(updateByID.data);
  } catch (error) {
    res.status(400).json(error);
  }
};

//DELETE
export const deleteCashIn = async function (req: Request, res: Response) {
  try {
    const token = req.headers.authorization!.split(' ')[1];
    const deleted = await cashInService.deleteByID(req.params.ID, token);
    res.json(deleted);
  } catch (error) {
    res.status(400).json(error);
  }
};

// GET TOTAL RESIDUE CASH
export const totalResidueCashIn = async function (req: Request, res: Response) {
  try {
    const token = req.headers.authorization!.split(' ')[1];
    const totalResidue = await cashInService.getTotResidue(token);
    res.json(totalResidue);
  } catch (error) {
    res.status(400).json(error);
  }
};

// GET RESIDUE CASH BY ID
export const residueCashInByID = async function (req: Request, res: Response) {
	try {
    const token = req.headers.authorization!.split(' ')[1];
    const residueByID = await cashInService.getResidueByID(req.params.ID, token);
    res.json(residueByID);
  } catch (error) {
    res.status(400).json(error);
  }
};



