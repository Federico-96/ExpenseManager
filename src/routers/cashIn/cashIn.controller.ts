import { Request, Response } from 'express';
import * as cashInService from './cashIn.service';


// CREATE
export const createCashIn = async function (req: Request, res: Response) {
  try {
    const cashIn = await cashInService.create(req.body);
    res.json(cashIn.data.name);
  } catch (error) {
    res.status(400).json(error);
  }
};

//GET ALL
export const getCashIn = async function (req: Request, res: Response) {
  try {
    const allCashIn = await cashInService.getAll();
    res.json(allCashIn);
  } catch (error) {
    res.status(400).json(error);
  }
};

// GET BY ID
export const getCashInByID = async function (req: Request, res: any) {
  try {
    const cashInByID = await cashInService.getByID(req.params.ID);
    res.json(cashInByID);
  } catch (error) {
    res.status(400).json(error);
  }
};

//UPDATE
export const updateCashIn = async function (req: Request, res: Response) {
  try {
    const updateByID = await cashInService.updateByID(req.params.ID, req.body);
    res.json(updateByID.data);
  } catch (error) {
    res.status(400).json(error);
  }
};

//DELETE
export const deleteCashIn = async function (req: Request, res: Response) {
  try {
    const deleted = await cashInService.deleteByID(req.params.ID);
    res.json(deleted);
  } catch (error) {
    res.status(400).json(error);
  }
};

// GET TOTAL RESIDUE CASH
export const totalResidueCashIn = async function (req: Request, res: Response) {
  try {
    const totalResidue = await cashInService.getTotResidue();
    res.json(totalResidue);
  } catch (error) {
    res.status(400).json(error);
  }
};

// GET RESIDUE CASH BY ID
export const residueCashInByID = async function (req: Request, res: Response) {
	try {
    const residueByID = await cashInService.getResidueByID(req.params.ID);
    res.json(residueByID);
  } catch (error) {
    res.status(400).json(error);
  }
};



