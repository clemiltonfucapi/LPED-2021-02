

import { Funcionario } from "./model/Funcionario.js";
import { Pessoa } from "./model/Pessoa.js";
import { Vendedor } from "./model/Vendedor.js";

let p = new Pessoa("clemilton","2321321");
console.log(p.toString)

let f = new Funcionario("Lia","23232",3000);
console.log(f.toString);
console.log(f.toString2)

let v = new Vendedor("Kennedy","1111",5000);
v.totalVendas = 20000;

console.log(v.toString)
console.log(v.calculaSalario)