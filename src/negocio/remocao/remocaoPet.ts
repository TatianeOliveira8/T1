import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Remocao from "./remocao"
import ServicoCliente from "../servicosCliente"

export default class RemoverPet extends Remocao {
  private clientes: Cliente[]
  private entrada: Entrada

  constructor(clientes: Cliente[]) {
    super()
    this.clientes = clientes
    this.entrada = new Entrada() }

  public remover(): void {
    console.log("\nRemoção de Pet:")
    const cpf = this.entrada.receberTexto("Digite o CPF do dono do pet: ")
    const cliente = ServicoCliente.encontrarPorCPF(this.clientes, cpf)

    if (!cliente) {
      console.log("Cliente não encontrado.\n")
      return }

    const nomePet = this.entrada.receberTexto("Digite o nome do pet que deseja remover: ")
    const pets = cliente.getPets
    const petIndex = pets.findIndex(p => p.getNome === nomePet)

    if (petIndex === -1) {
      console.log("Pet não encontrado.\n")
      return }

    pets.splice(petIndex, 1)
    console.log("Pet removido com sucesso.\n")
  }
}
