import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Remocao from "./remocao"
import ServicoCliente from "../servicosCliente"

export default class RemoverCliente extends Remocao {
  private clientes: Cliente[]
  private entrada: Entrada

  constructor(clientes: Cliente[]) {
    super()
    this.clientes = clientes
    this.entrada = new Entrada() }

  public remover(): void {
    console.log("\nRemoção de Cliente:")
    const cpf = this.entrada.receberTexto("Digite o CPF do cliente que deseja remover: ")
    const cliente = ServicoCliente.encontrarPorCPF(this.clientes, cpf)

    if (!cliente) {
      console.log("Cliente não encontrado.\n")
      return }

    const index = this.clientes.indexOf(cliente)
    this.clientes.splice(index, 1)
    console.log("Cliente removido com sucesso.\n")
  }
}
