

import { Pessoa } from "./Pessoa.js";


export class Funcionario extends Pessoa {
    #salario;
    constructor(nome,cpf,salario){
        super(nome,cpf)
        this.#salario = salario;
    }

    get toString(){
        return `Funcionario {`+ 
                `nome: ${this.nome}, `+
                `cpf: ${this.cpf}, `+
                `salario: ${this.#salario}  }\n`
    }

    get toString2(){
        return `Funcionario { `+
                //acessar o Pessoa.toString()
                `${super.toString}, salario: ${this.#salario} }`
    }

    get salario(){
        return this.#salario;
    }
    set salario(salario){
        this.#salario = salario;
    }

}