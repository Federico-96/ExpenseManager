import * as express from 'express';
import * as cashInController from './cashIn.controller';

const router = express.Router();

router.post('/', cashInController.createCashIn);
router.get('/', cashInController.getCashIn);
router.get('/:ID', cashInController.getCashInByID);
router.put('/:ID', cashInController.updateCashIn);
router.delete('/:ID', cashInController.deleteCashIn);
// router.get('/residue/:ID', cashInController.residueCashInByID);
router.get('/residue', cashInController.totalResidueCashIn);

export default router;