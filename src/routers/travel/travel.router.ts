import * as express from 'express';
import {creatTravel, getAllTravel, getTravelByID, editTravel, deleteTravel} from './travel.controller';

const router = express.Router();

router.post('/', creatTravel);
router.get('/', getAllTravel);
router.get('/:ID', getTravelByID);
router.put('/:ID', editTravel);
router.delete('/:ID', deleteTravel);

export default router;