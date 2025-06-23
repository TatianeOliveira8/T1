import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`)

        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let preco = this.entrada.receberNumero(`Informe o preço do produto: R$ `)

        let id = this.produtos.length > 0 ? this.produtos[this.produtos.length - 1].id + 1 : 1

        let novoProduto = new Produto(id, nome, preco)
        this.produtos.push(novoProduto)

        console.log(`Produto cadastrado com sucesso! ID: ${id}\n`)
    }
}
