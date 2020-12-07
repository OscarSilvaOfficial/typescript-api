// Tipando a função print
function prints(args: String):void {
     console.log(args)
}//prints('Oscar da Silva')

// Criando uma função onde alguns parâmetros são opcionnais
function soma(a: number, b?: number):number {
    if (b == undefined) {
        return a
    }else return a + b
}//console.log(soma(2, 5))

function stringToArray(...args: string[]):string[] {
    const response = []
    
    for(const arg of args){
        response.push(arg)
    }
    return response
} //console.log(stringToArray('Docker', 'JS', 'Ecma', 'Vue', 'Typescript'))

// Criação de uma classe
interface Attributes {
    assunto: string
    mensagem: string
}

class Email implements Attributes{
    assunto: string;
    mensagem: string;   

    constructor(assunto: string, mensagem: string) {
        this.assunto = assunto
        this.mensagem = mensagem
    }

    getEmail() {
        const res = {
            assunto: this.assunto,
            msg: this.mensagem
        }

        return  res
    }
} const meuEmail = new Email('Docker', 'Precisamos aprender Docker')
  //console.log(meuEmail.getEmail())
