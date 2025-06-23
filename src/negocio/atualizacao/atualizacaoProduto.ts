import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Atualizacao from "./atualizacao"

export default class AtualizarProduto extends Atualizacao {
  private produtos: Array<Produto>
  private entrada: Entrada

  constructor(produtos: Array<Produto>) {
    super()
    this.produtos = produtos
    this.entrada = new Entrada() }

  public atualizar(): void {
    console.log("\nAtualização de Produto:")
    let id = this.entrada.receberNumero("Informe o ID do produto que deseja atualizar: ")

    let produto = this.produtos.find(p => p.id === id)

    if (!produto) {
      console.log("Produto não encontrado.")
      return }

    let novoNome = this.entrada.receberTexto("Novo nome do produto: ")
    let novoPreco = this.entrada.receberNumero("Novo preço do produto: R$ ")
    produto.nome = novoNome
    produto.preco = novoPreco

    console.log("Produto atualizado com sucesso.")
  }
}
