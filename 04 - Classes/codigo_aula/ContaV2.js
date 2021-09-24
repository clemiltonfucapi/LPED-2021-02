

class Conta{
    /* declaração dos atributos */
    nome;
    cpf;
    agencia;
    saldo;

    /* método construtor */
    constructor(nome,cpf,agencia,saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.agencia = agencia;
        this.saldo = saldo
    }
   
     /* retorna uma string, com as info. do obj*/
     toString(){
        return `Nome: ${this.nome}\n`+
                `CPF: ${this.cpf}\n`+
                `Agencia: ${this.agencia}\n`+
                `Saldo: ${this.saldo}\n`
    }

    /* método deposita(): aumenta o saldo */
    deposita(valor){
        //validação do valor
        if(valor <=0) {
            console.log('Valor invalido!');
            return ; // quebrar o código 
        }
        // aumentar o saldo
        this.saldo += valor;
        console.log(`Foi depositado ${valor} reais na sua conta ${this.nome}`)
    }

}
let c1 = new Conta('Ricardo',111111,1001,50)
let c2 = new Conta('Alice',2323232,1111,0)
//Exercicio : Instancie uma nova conta

//deposita 70 reais em c1
c1.deposita(70);
c2.deposita(80);
c1.deposita(-40)

console.log(c1.toString())
console.log(c2.toString())