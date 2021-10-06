

import { Gerente } from "./model/Gerente.js";
import { Vendedor } from "./model/Vendedor.js";


while(1){
    let op = menu();
    if(op==-1){
        console.log(Vendedor.LISTA);
        console.log(Gerente.LISTA);
        break;
    }
    if(op==1){
        //criando vendedor
        let v = Vendedor.criar()
        //inserir vendedor
        Vendedor.inserir(v);
    }
    else if(op == 2){
        let g = Gerente.criar();
        Gerente.inserir(g);
    }else if(op == 3){
        let strListaVendedores = Vendedor.listar();
        alert(strListaVendedores)
    }else if (op==4){
        let strListaGerentes = Gerente.listar();
        alert(strListaGerentes);
    
    }else if(op==5){
        // selecionando o indice do gerente
        let opcaoGerente = selecionaVendedor("Atualizar vendedor: \n");

        let vendedor = Gerente.LISTA[opcaoGerente]
        // adicionar um vendedor ao gerente.....
        vendedor.atualizar(opcaoGerente);        
    }else if(op==6){
        // selecionando o indice do gerente
        let opcaoGerente = selecionaGerente("Atualizar gerente: ");

        // 
        let gerente = Gerente.LISTA[opcaoGerente]
        // adicionar um vendedor ao gerente.....
        gerente.atualizar(opcaoGerente);        
    }else if(op==7){
        let opcaoVendedor = selecionaGerente("Remover vendedor:\n");

        Vendedor.deletar(opcaoVendedor)
        
    }
}


function menu(){
    let string;
    string="Digite uma opção: \n"
    string+="1 - INSERIR VENDEDOR \n"
    string+="2 - INSERIR GERENTE \n"
    string+="3 - MOSTRAR VENDEDORES\n"
    string+="4 - MOSTRAR GERENTES \n"
    string+="5 - ATUALIZAR VENDEDORES\n"
    string+="6 - ATUALIZAR GERENTES\n"
    string+="7 - DELETAR VENDEDOR\n"
    string+="8 - DELETAR GERENTE\n"
    string +="9 - GERENTE: Adicionar Vendedor\n"
    string+="-1 - SAIR"
    let opcao = parseInt(prompt(string))
    return opcao;
}

function selecionaGerente(string=""){
    string += "Selecione um gerente: \n"
    string += Gerente.listar();
    return parseInt(prompt(string))
}

function selecionaVendedor(string=""){
    string += "Selecione um vendedor: \n"
    string+= Vendedor.listar();
    return parseInt(prompt(string))
}


