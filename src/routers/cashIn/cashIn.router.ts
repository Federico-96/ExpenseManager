import * as express from 'express';
import * as cashInController from './cashIn.controller';

export const router = express.Router();

router.get('/', cashInController.getCashInByID);
