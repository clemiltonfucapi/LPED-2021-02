# Classes e Herança
![Images](imgs/slide01.png)

## <li>Herança é uma forma de reutilização de software, onde uma nova classe é criada absorvendo dados de uma classe existente.</li>
## <li>A classe nova é chamada de SUBCLASSE, já a classe antiga, que é absorvida pela nova, é chamada de SUPERCLASSE </li>
## <li> A herança pode se dar em vários níveis, formando uma hierarquia</li>
## <li>A classe filha terá todos os atributos e métodos da classe pai </li>
## <li>Vamos implementar o seguinte modelo: </li>
- 
    - ![Images](imgs/heranca.png)
    - A figura acima demonstra um diagrama de classes. O diagrama de classes é uma modelagem que permite visualizar os atributos, métodos e hierarquias de uma classe.
    - Cada classe é representado em um compartimento de 3 espaços. 
        - 1º compartimento: Nome da classe
        - 2º compartimento: Atributos
        - 3º compartimento: Métodos
    - A seta entre Funcionário e Pessoa, indica quem Funcionário é classe filha de Pessoa. Ou seja, Funcionário irá ter os atributos e métodos de pessoa.
# 1 - Pessoa.js
- Vamos desenvolver a classe ``Pessoa.js``
    ```js
    export class Pessoa {
        #nome;
        #cpf;
        constructor(nome,cpf){
            this.#nome = nome;
            this.#cpf = cpf;
        }
        get nome(){
            return this.#nome;
        }
        set nome(nome){
            this.#nome = nome;
        }
        get cpf(){
            return this.#cpf;
        }
        set cpf(cpf){
            this.#cpf  =cpf;
        }
        get toString(){
            return `Pessoa {`+
                    `Nome: ${this.#nome}, CPF: ${this.#cpf} }`;
        }
    }  
    ```
    - Nesta classe criamos:
        -  atributos privados: #nome  e #cpf
        - get e set do atributos nome e cpf
        - get toString(): para retornar os dados do objeto.
- Exportamos a classe como módulos. Para o node.js entender isso, devemos criar um arquivo na mesma pasta com o nome ``package.json`` com o código:
    ```js
    {
        "type":"module"
    }
    ```
- Crie um arquivo chamado ``index.js``:
    ```js
    import {Pessoa} from './Pessoa.js'

    let p = new Pessoa("clemilton","23232");
    console.log(p.toString)
    ```
    - Deve ser impresso no console os dados do objeto, junto com o nome da classe.
    - ![Images](imgs/shell02.png)

# Funcionário.js
- Vamos implementar a classe funcionário: 
```javascript
import { Pessoa } from "./Pessoa.js";
/* Funcionario é uma pessoa 
A classe Funcionário tem:
    - todos os atributos de Pessoa
    - todos os métodos de Pessoa
*/
export class Funcionario extends Pessoa{
    #salario;
    constructor(nome,cpf,salario){
        // super() -> chama o construtor da classe pai
        super(nome,cpf); //inicializando atributos de Pessoa
        this.#salario = salario; 
    }
}
```
- Primeiro importamos a classe ``Pessoa`` dentro do arquivo da classe ``Funcionario``. Isso é possível, pois exportamos a classe pessoa como módulo:
    ```javascript
    import { Pessoa } from "./Pessoa.js";
    ```
-  A palavra **extends**, neste caso, indica que a classe ``Funcionario`` é filha da classe ``Pessoa``s:
    ```javascript
    export class Funcionario extends Pessoa{
        #salario
    }
    ```
    - Ou seja, TODOS os atributos e métodos de ``Pessoa``, passem para a classe ``Funcionário``
    - O atributo ``salario`` será somente da classe funcionário
- Método construtor: 
    ```javascript
    constructor(nome,cpf,salario){
        // super() -> chama o construtor da classe pai
        super(nome,cpf); //inicializando atributos de Funcionario
        this.#salario = salario; 
    }
    ```
    - O método construtor inicializa os atributos da classe ``Pessoa``(nome e cpf), e o atributo ``#salario``.
    - O comando **super** faz referência a classe pai da atual. Ou seja, utilizamos **super()**, estamo chamando o construtor da classe pai. O construtor da clase ``Pessoa`` tem dois parâmetros: nome e cpf.
    - Depois inicializamos o atributo ``#salario`` da classe Funcionario

- Agora volte ao arquivo ``index.js``:
    ```js 
    import { Funcionario } from './Funcionario.js';
    import {Pessoa} from './Pessoa.js'

    let p = new Pessoa("clemilton","23232");
    console.log(p.toString); //imprimindo Pessoa

    let f = new Funcionario("Lia","23232",3000);
    console.log(f.toString); // imprimindo funcionário
    ```
    - Obtemos como saída no console: ![Images](imgs/shell03.png)
    - Perceba que não foi impreso o salário do objeto Funcionário. Isso aconteceu pois ao executar o comando ```console.log(f.toString)```, estamos chamando o método da classe Pessoa e não do Funcionário. Para imprimir o salário, vamos implementar ``toString()`` em ``Funcionario``:
- Implementação ``toString()``:
```js
export class Funcionario extends Pessoa
    //z
    get toString(){
        return `Funcionario {`+ 
                `nome: ${this.nome}, `+
                `cpf: ${this.cpf}, `+
                `salario: ${this.#salario}  }\n`
    }
```
- Obtemos como saída em ``index.js``:
    - ![Images](imgs/shell05.png)
    - Dessa vez, conseguimos ver os atributos da classe funcionário.
- Vamos fazer um versão do método toString em ``Funcionario.js``
    ```js
    export class Funcionario extends Pessoa{
        ...
        get toString2(){
            return `Funcionario { `+
                    //acessando toString da classe Pessoa
                    `${super.toString}, `+
                    `salario: ${this.#salario} }`;
        }
    }
    ```
    - Nesta versão, fazemos uso do ``super`` para acessar o método da classe pai.
- Modifique ``index.js``:
 ```js
import { Funcionario } from './Funcionario.js';
import {Pessoa} from './Pessoa.js'

let p = new Pessoa("clemilton","23232");
console.log(p.toString)

let f = new Funcionario("Lia","23232",3000);
console.log(f.toString)
console.log(f.toString2)
 ```
 - Implementação dos métodos *get* e *set* do atributo ``#salario``
 ```js
export class Funcionario extends Pessoa{
    ...
    get salario(){
        return this.#salario;
    }

    set salario(s){
        this.#salario = s;
    }
}
 ```
# Classe Vendedor.js
- Faça o seguinte código em ``Vendedor.js``: 
    ```js
    import { Funcionario } from "./Funcionario.js";

    export class Vendedor extends Funcionario {
        #totalVendas

        constructor(nome,cpf,salario){
            super(nome,cpf,salario)
            //iniciar totalVendas com 0
            this.#totalVendas = 0;
        }
        /* get e set totalVendas */
        get totalVendas(){
            return this.#totalVendas;
        }
        set totalVendas(total){
            this.#totalVendas = total;
        }

        get toString(){
            return `Vendedor { `+
                    `${super.toString2}, `+
                    `totalVendas: ${this.#totalVendas}`
        }
    }
    ```
    - Criamos uma classe ``Vendedor`` que herda de ``Funcionario``. Tem o atributo ``totalVendas`` que será utilizado para realizar um cálculo diferenciado do salário.  
- Crie uma pasta chamada ``models/`` e coloque todos os arquivos de classes dentro desta pasta:
    - ![Images](imgs/img01.png)
- Em ``index.js``:
    ```js
    import { Funcionario } from './classes/Funcionario.js';
    import {Pessoa} from './classes/Pessoa.js'
    import { Vendedor } from './classes/Vendedor.js';

    let p = new Pessoa("clemilton","23232");
    console.log(p.toString)

    let f = new Funcionario("Lia","23232",3000);
    console.log(f.toString)
    console.log(f.toString2)

    let v = new Vendedor("Gilberto","3232320",2500);
    console.log(v.toString);
    ```
    - Saída no console: ![Images](imgs/shell06.png)
    - Ou seja,o ``toString()`` da classe ``Vendedor`` está sendo executado

- Agora vamos implementar um método chamado calculaSalario na classe vendedor. A ideia é que o salário do vendedor, seja calculado pela quantidade de vendas:
    ```javascript
    export class Vendedor extends Funcionario {
        .....

        get calculaSalario(){
            // salario = salario + 1% das vendas
            return this.salario + this.#totalVendas*0.01
        }
    }
    ```
    - O método soma o salário com 1% do total de vendas.
- Modifique ``index.js`` para:
```js
simport { Funcionario } from "./model/Funcionario.js";
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
```
- E obtemos como saída:
    - ![Images](imgs/shell07.png)
    - Criamos um vendedor com salario 5000, e total de vendas 20000. O calculo do salario do vendedor é feito pelo método calculaSalario.

# Código aula 01-10
- https://github.com/clemiltonfucapi/LPED-2021-02/raw/main/06%20-%20Heranca/codigo_aula/aula-01-10.zip

#