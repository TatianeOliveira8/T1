import Servico from "../../modelo/servico"
import Listagem from "./listagem"

export default class ListagemServicos extends Listagem {
  private servicos: Array<Servico>

  constructor(servicos: Array<Servico>) {
    super()
    this.servicos = servicos }

  public listar(): void {
    console.log("\nLista de serviços cadastrados:")
    if (this.servicos.length === 0) {
      console.log("Nenhum serviço cadastrado.")
      return }

    this.servicos.forEach(servico => {
      console.log(`ID: ${servico.id} | Nome: ${servico.nome} | Preço: R$${servico.preco.toFixed(2)}`)
    })
  }
}
