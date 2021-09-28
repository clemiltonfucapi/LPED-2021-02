
class Retangulo{
    /* atributos privados - não podem ser acessados fora da classe 
    ENCAPSULAMENTO: 
        - Atributos são privados
        - Métodos são públicos

    OBS: Atributos priv. são acessiveis DENTRO da classe(métodos)
    */
  
    #ladoA;
    #ladoB;

    constructor(ladoA,ladoB){
        this.#ladoA = ladoA;
        this.#ladoB = ladoB
    }

    get ladoA(){
        return this.#ladoA
    }
    set ladoA(novoLado){
        this.#ladoA = novoLado
    }

    get ladoB(){
        return this.#ladoB;
    }

    set ladoB(novoLado){
        this.#ladoB  = novoLado; 
    }


}

let r1 = new Retangulo(2,3)
//chamando set ladoA
r1.ladoA = 3;

console.log(r1)

console.log(Retangulo.nome)
// chamando get ladoB
console.log(r1.ladoB)
