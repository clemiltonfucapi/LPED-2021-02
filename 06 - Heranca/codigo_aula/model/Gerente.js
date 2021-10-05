

import { Funcionario } from "./Funcionario.js";
import { Vendedor } from "./Vendedor.js";


export class Gerente extends Funcionario { 
    // é um array -> pode ser de qualquer tipo
    #listaVendedores;

    constructor(nome,cpf,salario){
        super(nome,cpf,salario);
        this.#listaVendedores = [];
    }

    listarVendedores(){
        console.log("Gerente: "+ this.nome)
        this.#listaVendedores.forEach(function (vendedor = new Vendedor()) {
            console.log(" - " + vendedor.nome + ' ; totalVendas: ' 
                            + vendedor.totalVendas);
        })
    }

    adicionarVendedor(vendedor = new Vendedor){
        this.#listaVendedores.push(vendedor)
    }

    get salarioTotal(){
        let soma = 0;
        this.#listaVendedores.forEach(  (v) => {
            //soma => receber o adicional de cada vendedor
            soma +=  v.adicional();
        })
        return this.salario + soma;
    }

}