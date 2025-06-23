import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Atualizacao from "./atualizacao"

export default class AtualizacaoServico extends Atualizacao {
  private servicos: Array<Servico>
  private entrada: Entrada

  constructor(servicos: Array<Servico>) {
    super()
    this.servicos = servicos
    this.entrada = new Entrada() }

  public atualizar(): void {
    console.log("\nAtualização de Serviço:")
    let id = this.entrada.receberNumero("Informe o ID do serviço que deseja atualizar: ")

    const servico = this.servicos.find(s => s.id === id)

    if (!servico) {
      console.log("Serviço não encontrado.")
      return }

    let novoNome = this.entrada.receberTexto("Novo nome do serviço: ")
    let novoPreco = this.entrada.receberNumero("Novo preço do serviço: ")
    servico.nome = novoNome
    servico.preco = novoPreco

    console.log("Serviço atualizado com sucesso.\n")
  }
}
