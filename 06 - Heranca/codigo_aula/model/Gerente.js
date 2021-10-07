

import { Funcionario } from "./Funcionario.js";
import { Vendedor } from "./Vendedor.js";


export class Gerente extends Funcionario { 
    // é um array -> pode ser de qualquer tipo
    #listaVendedores;

    static LISTA=[
        new Gerente("aaa","bbb",2000),
        new Gerente("bbb","22222",3000)

    ];

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
    //static -> Acessivel pela classe Gerente.criar()
    static criar(){
        let g = new Gerente()
        g.nome = prompt("DIgite o nome do gerente")
        g.cpf = prompt("DIgite o cpf do Gerente")
        g.salario = parseInt(prompt("Digite o salario"))
        // obs: listaVendedores foi iniciado no construtor
        return g;
    }

    static inserir(gerente){
        if( !(gerente instanceof Gerente) ){
            alert("Erro ao inserir gerente")
            return;
        }
        Gerente.LISTA.push(gerente)
    }

    static listar(){
        let string = "Lista de Gerentes: \n";
        //percorrer a lista de gerentes
        Gerente.LISTA.forEach(  (gerente,index) =>  {
            string +=index + " - " +gerente.toString
            string+='\n';
        })

        return string;
    }

    get toString(){
        return `nome: ${this.nome} | cpf: ${this.cpf} | salario : ${this.salarioTotal}`
    }
    //O método atualizar: Recebe como parâmetro o indice do gerente 
    atualizar(indiceGerente){
        //atualizando dados do gerente
        this.nome=prompt("Digite o nome do gerente")
        this.cpf = prompt("DIgite o cpf do gerente")
        this.salario = prompt("DIgite o salario do gerente")

        //atualizando o gerente com os dados atuais do gerente
        Gerente.LISTA[indiceGerente] = this;
    }

    static deletar(indice){
        let vendedor = this.LISTA[indice];

        string+="Deseja deletar este gerente? \n"
        string+=`    - nome: ${vendedor.nome}}`
        string+=`    - cpf: ${vendedor.cpf}}`
        string+=`    - salario: ${vendedor.salario}}`

        if(confirm(string)){
            //splice(indice,1): Remover um elemento a partir do indice
            Gerente.LISTA.splice(indice,1);
        }
    }
    

}