import { Router } from 'express'
import ApiController from '../controllers/ApiController';


const router = Router()

router.get('/api', ApiController.getData)

export default router