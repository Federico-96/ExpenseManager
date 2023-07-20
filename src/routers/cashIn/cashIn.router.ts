import * as express from 'express';
import {getCashInByID, getCashIn, residueCashInByID, totalResidueCashIn, createCashIn} from './cashIn.controller';

const router = express.Router();

router.get('/:ID', getCashInByID);
router.get('/', getCashIn);
// router.get('/', residueCashInByID);
// router.get('/', totalResidueCashIn);
router.put('/', createCashIn);

export default router;