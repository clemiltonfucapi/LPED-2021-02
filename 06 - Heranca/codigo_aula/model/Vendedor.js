

import { Funcionario } from "./Funcionario.js";

export class Vendedor extends Funcionario{
    #totalVendas;

    constructor(nome,cpf,salario){
        super(nome,cpf,salario); // construtor de Funcionario
        this.#totalVendas = 0;
    }

    get totalVendas(){
        return this.#totalVendas;
    }
    set totalVendas(total){
        this.#totalVendas = total;
    }
    get toString(){
        return `Vendedor { ${super.toString2 }},`+
                        ` totalVendas: ${this.#totalVendas}`
    }
    get calculaSalario(){
        return this.salario + this.#totalVendas*0.01;
    }
    
}