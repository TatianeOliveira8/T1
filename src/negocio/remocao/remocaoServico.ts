import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Remocao from "./remocao"

export default class RemocaoServico extends Remocao {
  private servicos: Array<Servico>
  private entrada: Entrada

  constructor(servicos: Array<Servico>) {
    super()
    this.servicos = servicos
    this.entrada = new Entrada() }

  public remover(): void {
    console.log("\nRemoção de Serviço:")
    let id = this.entrada.receberNumero("Informe o ID do serviço a ser removido: ")

    const index = this.servicos.findIndex(s => s.id === id)

    if (index === -1) {
      console.log("Serviço não encontrado.")
      return }

    this.servicos.splice(index, 1)
    console.log("Serviço removido com sucesso.")
  }
}
