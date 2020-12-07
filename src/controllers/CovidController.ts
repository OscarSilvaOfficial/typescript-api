import covidSummary from '../services/CovidService'
import { Request, Response } from 'express'
import { json } from 'body-parser'


export default {
    async getNews(req: Request, res: Response) {
        const response = await covidSummary()
        console.log(req.ip)
        return res.json(response)    
    },
}