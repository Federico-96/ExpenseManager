import { Request, Response } from "express";
import axios from 'axios';

// GET BY ID
export const getCashInByID = async function (req: Request, res: any) {
  try {
    const response = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/cashin/${req.params.ID}.json`);
    res.json(response.data)

  } catch (error) {
    res.status(400).json(error);
  }
};

//GET ALL
export const getCashIn = async function (req: Request, res: Response) {
  try {
    const response = await axios.get('https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/cashin.json');
    const responseArray = [];
    for (const key in response.data) {
      // if (Object.prototype.hasOwnProperty.call(response.data, '-NbECVRYvEXPV79iu4ji')) { controlla se esiste uyna proprietà all'interno di un oggetto
      //     console.log(true)
      // } else {
      //   console.log(false)
      // }
      responseArray.push({
        id: key,
        ...response.data[key]
      })
    }
    res.json(responseArray)
  } catch (error) {
    res.status(400).json(error);
  }
};

// EDIT 
export const putCashIn = async function (req: Request, res: Response) {
  try {
    const responseByID = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/cashin/${req.params.ID}.json`);
    const bodyPUT = { ...responseByID.data, ...req.body };

    // const requestPUT = []
    // for (const key in responseByID.data) {
    //   requestPUT.push(axios.put(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/cashin/${req.params.ID}/${key}`, {key: responseByID.data[key]}))
    // }
    // const x = await Promise.all(requestPUT)

    const response = await axios.put(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/cashin/${req.params.ID}.json`, bodyPUT);
    res.json(response.data)

  } catch (error) {
    res.status(400).json(error);
  }
}

// GET RESIDUE CASH BY ID
export const residueCashInByID = function (req: any, res: any) {
  // const residueByID = cashInMock.find((c) => c.ID === req.params.ID);
  // if (!!residueByID) {
  //   res.json(residueByID.amount);
  // } else {
  //   res.status(404).send("ID not found");
  // }
};

// GET TOTAL RESIDUE CASH
export const totalResidueCashIn = async function (req: Request, res: Response) {
  const travel = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/travel.json`);
  const fuel = await axios.get(`https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/fuel.json`);

  // const totalResidue = cashInMock.reduce((prev, cur) => {
  //   return (prev += cur.amount);
  // }, 0);
  res.json(10);
};

// CREATE
export const createCashIn = async function (req: Request, res: Response) {
  try {
    const response = await axios.post('https://notaspesa-default-rtdb.europe-west1.firebasedatabase.app/cashin.json', req.body)
    res.json(response.data.name);
  } catch (error) {
    res.status(400).json(error);
  }

};
