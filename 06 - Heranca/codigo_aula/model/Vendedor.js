

import { Funcionario } from "./Funcionario.js";

export class Vendedor extends Funcionario{
    #totalVendas;
    /* PERCENTUAL é um atributo
    - é publico
    - estático: Todos os objetos compartilham o mesmo valor
    */
    static PERCENTUAL = 0.01; 
    constructor(nome,cpf,salarioBase){
        super(nome,cpf,salarioBase); // construtor de Funcionario
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
    get salarioTotal(){
        return this.salario + this.adicional();
    }

    adicional(){
        return this.#totalVendas*Vendedor.PERCENTUAL;
    }
    
}