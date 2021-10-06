

import { Funcionario } from "./Funcionario.js";

export class Vendedor extends Funcionario{
    #totalVendas;
    static LISTA=[];
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

    static criar(){
        let v = new Vendedor();
        v.nome = prompt("Digite o nome nome do vendedor");
        v.cpf = prompt("Digite o cpf do vendedor");
        v.salario = parseInt(prompt("Digite o salario do vendedor"))
        v.totalVendas =0;
        return v;
    }

    static inserir(vendedor){
        if(   !(vendedor instanceof Vendedor)  ){
            alert("Erro ao inserir vendedor")
            return;
        }
        //inserir o vendedor na LISTA
        Vendedor.LISTA.push(vendedor);
    }
    static listar(){
        let string = "Lista de Vendedores: \n";
        //percorrer a lista de vendedores
        Vendedor.LISTA.forEach(  (vendedor,index) =>  {
            string += index+' - '+vendedor.toString
            string+='\n';
        })

        return string;
    }
    get toString(){
        return `nome: ${this.nome} | salario : ${this.salarioTotal}`
    }
    atualizar(indiceVendedor){
        //atualizando dados do gerente
        this.nome=prompt("Digite o nome do vendedor")
        this.cpf = prompt("DIgite o cpf do vendedor")
        this.salario = prompt("DIgite o salario do vendedor")

        //atualizando o gerente com os dados atuais do gerente
        Vendedor.LISTA[indiceVendedor] = this;
    }

    static deletar(indice){
        let vendedor = this.LISTA[indice];
        let string="";
        string+="Deseja deletar este vendedor? \n"
        string+=`    - nome: ${vendedor.nome}}`
        string+=`    - cpf: ${vendedor.cpf}}`
        string+=`    - salario: ${vendedor.salario}}`

        if(confirm(string)){
            //splice(indice,1): Remover um elemento a partir do indice
            Vendedor.LISTA.splice(indice,1);
        }
    }
    
}