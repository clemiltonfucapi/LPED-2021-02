export class Categoria{
    static LISTA=[
        new Categoria("HQ"),
        new Categoria("Literatura"),
        new Categoria("Didatico")
    ];
    #nome;

    constructor(nome){
        this.#nome=nome
    }

    //criarCategoria()
}