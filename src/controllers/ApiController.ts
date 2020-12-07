import ApiService from '../services/ApiService'
import { Request, Response } from 'express'
import { json } from 'body-parser'


export default {
    getData(req: Request, res: Response) {
        const response = ApiService()
        return res.json(response)    
    },
}