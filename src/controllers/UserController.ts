import { json } from 'body-parser'
import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    {
        nome: 'Oscar',
        email:'oscar@oscar.com.br'
    },
]

export default {
    async index(req:Request, res: Response) {
        return res.json(users)
    },
    async cadastrarEmail(req: Request, res:Response): Promise<void> {
        const emailService = new EmailService()
        const mailRes = emailService.sendMail(
            {
                to: {nome:'Oscar',  email:'oscar@oscar.com'},
                message: {subject:'Sei la', body:'Oscar é um cara muito legal.'}
            }
        )
        res.send(mailRes)
    }
}