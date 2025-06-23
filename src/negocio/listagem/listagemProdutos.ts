import Produto from "../../modelo/produto"
import Listagem from "./listagem"

export default class ListagemProduto extends Listagem {
  private produtos: Array<Produto>

  constructor(produtos: Array<Produto>) {
    super()
    this.produtos = produtos }

  public listar(): void {
    console.log("\nLista de produtos cadastrados:")
    if (this.produtos.length === 0) {
      console.log("Nenhum produto cadastrado.")
      return }

    this.produtos.forEach(produto => {
      console.log(`ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$${produto.preco.toFixed(2)}`) })
  }
}
