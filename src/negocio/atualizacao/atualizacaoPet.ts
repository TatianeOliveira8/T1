import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Atualizacao from "./atualizacao"

export default class AtualizarPet extends Atualizacao {
  private clientes: Array<Cliente>
  private entrada: Entrada

  constructor(clientes: Array<Cliente>) {
    super()
    this.clientes = clientes
    this.entrada = new Entrada() }

  public atualizar(): void {
    console.log("\nAtualização de Pet")
    const cpf = this.entrada.receberTexto("Informe o CPF do cliente: ")

    const cliente = this.clientes.find(c => c.getCpf.getValor === cpf)

    if (!cliente) {
      console.log("Cliente não encontrado.")
      return }

    const nomePet = this.entrada.receberTexto("Informe o nome do pet que deseja atualizar: ")

    const pet = cliente.getPets.find(p => p.getNome === nomePet)

    if (!pet) {
      console.log("Pet não encontrado.")
      return }

    const novoNome = this.entrada.receberTexto("Novo nome do pet: ")
    const novaRaca = this.entrada.receberTexto("Nova raça: ")
    const novoGenero = this.entrada.receberTexto("Novo gênero ((M/F)): ")
    const novoTipo = this.entrada.receberTexto("Novo tipo do pet: ")
    pet.setNome = novoNome
    pet.setRaca = novaRaca
    pet.setGenero = novoGenero
    pet.setTipo = novoTipo

    console.log("Pet atualizado com sucesso.")
  }
}
