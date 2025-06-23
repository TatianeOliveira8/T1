import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Remocao from "./remocao"

export default class RemocaoProduto extends Remocao {
  private produtos: Array<Produto>
  private entrada: Entrada

  constructor(produtos: Array<Produto>) {
    super()
    this.produtos = produtos
    this.entrada = new Entrada() }

  public remover(): void {
    console.log("\nRemoção de Produto:")
    let id = this.entrada.receberNumero("Informe o ID do produto a ser removido: ")

    const index = this.produtos.findIndex(p => p.id === id)

    if (index === -1) {
      console.log("Produto não encontrado.")
      return }

    this.produtos.splice(index, 1)
    console.log("Produto removido com sucesso.")
  }
}
