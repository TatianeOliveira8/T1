export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}

    public set setNome(novoNome: string) { this.nome = novoNome }
    public set setRaca(novaRaca: string) { this.raca = novaRaca }
    public set setGenero(novoGenero: string) { this.genero = novoGenero }
    public set setTipo(novoTipo: string) { this.tipo = novoTipo }

    
}

