import * as express from 'express';
import * as cashInController from './cashIn.controller';

const router = express.Router();

router.get('/:ID', cashInController.getCashInByID);
router.get('/', cashInController.getCashIn);
// router.get('/residue/:ID', cashInController.residueCashInByID);
router.get('/residue', cashInController.totalResidueCashIn);
router.post('/', cashInController.createCashIn);
router.put('/:ID', cashInController.putCashIn);

export default router;