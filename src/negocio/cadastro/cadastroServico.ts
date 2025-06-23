import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
  private servicos: Array<Servico>
  private entrada: Entrada

  constructor(servicos: Array<Servico>) {
    super()
    this.servicos = servicos
    this.entrada = new Entrada() }

  public cadastrar(): void {
    console.log("\nInício do cadastro de serviço:")

    let nome = this.entrada.receberTexto("Informe o nome do serviço: ")
    let preco = this.entrada.receberNumero("Informe o preço do serviço: ")
    let id = this.servicos.length > 0 ? this.servicos[this.servicos.length - 1].id + 1 : 1

    let servico = new Servico(id, nome, preco)
    this.servicos.push(servico)

console.log(`Cadastro de serviço concluído com sucesso. ID: ${servico.id}\n`)
  }
}
