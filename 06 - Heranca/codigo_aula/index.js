

import { Funcionario } from "./model/Funcionario.js";
import { Gerente } from "./model/Gerente.js";
import { Pessoa } from "./model/Pessoa.js";
import { Vendedor } from "./model/Vendedor.js";


let v1 = new Vendedor("Kennedy","1111",5000);
v1.totalVendas = 20000;

let v2 = new Vendedor("Patricia","3232",5000);
v2.totalVendas = 17000;

let v3 = new Vendedor("Leonardo","5652",5000);
v3.totalVendas = 22000;

let gerente = new Gerente("Thais","9999",7000);
gerente.adicionarVendedor(v1);
gerente.adicionarVendedor(v2)
gerente.adicionarVendedor(v3);
gerente.listarVendedores();




import promptSync from 'prompt-sync';

const prompt = promptSync();
console.log("digite um numero: ")
const result = prompt();
console.log(result)