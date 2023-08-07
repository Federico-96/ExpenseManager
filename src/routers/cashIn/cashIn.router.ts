import * as express from 'express';
import {getCashInByID, getCashIn, residueCashInByID, totalResidueCashIn, createCashIn, putCashIn} from './cashIn.controller';

const router = express.Router();

router.get('/:ID', getCashInByID);
router.get('/', getCashIn);
router.get('/residue/:ID', residueCashInByID);
router.get('/residue', totalResidueCashIn);
router.post('/', createCashIn);
router.put('/:ID', putCashIn);

export default router;