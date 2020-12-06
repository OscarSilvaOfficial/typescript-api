import { covidNews } from '../services/CovidService'
import { Request, Response } from 'express'
import { json } from 'body-parser'


export default {
    async getNews(req: Request, res: Response) {
        return res.json(await covidNews())
    },
}