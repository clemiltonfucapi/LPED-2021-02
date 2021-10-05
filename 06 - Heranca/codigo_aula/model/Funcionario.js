

import { Pessoa } from "./Pessoa.js";


export class Funcionario extends Pessoa {
    #salarioBase;
    constructor(nome,cpf,salario){
        super(nome,cpf)
        this.#salarioBase = salario;
    }

    get toString(){
        return `Funcionario {`+ 
                `nome: ${this.nome}, `+
                `cpf: ${this.cpf}, `+
                `salario: ${this.#salarioBase}  }\n`
    }

    get toString2(){
        return `Funcionario { `+
                //acessar o Pessoa.toString()
                `${super.toString}, salario: ${this.#salarioBase} }`
    }

    get salario(){
        return this.#salarioBase;
    }
    set salario(salario){
        this.#salarioBase = salario;
    }

}