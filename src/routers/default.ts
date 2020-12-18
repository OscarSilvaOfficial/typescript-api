import { Router } from 'express'
import { bitcoinTody, bitcoinHistory } from '../controllers/ApiController';

const router = Router()

router.get('/bitcoin/today', bitcoinTody)
router.get('/bitcoin/history', bitcoinHistory)

export default router