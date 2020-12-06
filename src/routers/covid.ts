import { Router } from 'express'
import covidController from '../controllers/CovidController'


const router = Router()

router.get('/covid', covidController.getNews)

export default router