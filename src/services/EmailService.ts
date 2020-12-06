// Definição dos Tipos personalizados
interface IMailTo {
    nome: string;
    email: string;
}

interface IMailMsg {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMsg; 
}

// Criação da Classe
class EmailService {
    sendMail({to, message}: IMessageDTO) {
        return `E-mail enviado para ${to.nome} cujo e-mail é ${to.email}`
    }
}

export default EmailService