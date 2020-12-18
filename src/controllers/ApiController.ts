import { getBitcoinToday, getBitcoinHistory } from '../services/EndpointService'
import { Request, Response } from 'express'


const bitcoinTody = async(req: Request, res: Response) => {
    const response = await getBitcoinToday() 
    return res.json(response)    
}

const bitcoinHistory = async(req: Request, res: Response) => {
    const response = await getBitcoinHistory() 
    return res.json(response)    
}

export { bitcoinTody, bitcoinHistory }