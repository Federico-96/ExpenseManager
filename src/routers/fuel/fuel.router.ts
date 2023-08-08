import * as express from 'express';
import {createFuel, getAllFuel, getFuelByID, editFuel, deleteFuel} from './fuel.controller';

const router = express.Router();

router.post('/', createFuel);
router.get('/', getAllFuel);
router.get('/:ID', getFuelByID);
router.put('/:ID', editFuel);
router.delete('/:ID', deleteFuel);

export default router;