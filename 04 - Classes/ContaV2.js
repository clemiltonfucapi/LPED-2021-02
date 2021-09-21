/* Classe conta */
class Conta{
    /* metodo construtor */
    constructor(nome,cpf,agencia,saldo){
        /*inicializando atributos */
        this.nome = nome
        this.cpf = cpf;
        this.agencia = agencia
        this.saldo = saldo
    }

    toString(){
        return `Nome: ${this.nome}\n`+
                `CPF: ${this.cpf}\n`+
                `Agencia: ${this.agencia}\n`+
                `Saldo: ${this.saldo}\n`
    }

    deposita(valor){
        this.saldo += valor;
        console.log(`Foi depositado ${this.saldo} reais na sua conta ${this.nome}`)
    }


}

let c1  = new Conta('Ricardo',1111111,1001,0)
let c2 = new Conta('Alice',88888,1001,0)

c1.deposita(50)
c2.deposita(100)

console.log("Conta 1: \n"+c1.toString())
console.log("Conta 2: \n"+c2.toString())
