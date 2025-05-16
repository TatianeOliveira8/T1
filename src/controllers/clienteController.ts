import Pet from '../modelo/pet'
import Cliente from '../modelo/cliente'

export default class ClienteController {
  private clientes: Cliente[] = []

  criarCliente(cliente: Cliente): void {
    this.clientes.push(cliente)
  }

  listarClientes(): Cliente[] {
    return this.clientes
  }

  buscarCliente(nome: string): Cliente | undefined {
    return this.clientes.find(c => c.nome === nome)
  }

  editarCliente(nomeAtual: string, novoNome: string): boolean {
    const cliente = this.buscarCliente(nomeAtual)
    if (!cliente) return false
    cliente.nome = novoNome
    return true
  }

  deletarCliente(nome: string): boolean {
    const totalAntes = this.clientes.length
    this.clientes = this.clientes.filter(c => c.nome !== nome)
    return this.clientes.length < totalAntes
  }

  // PETS

  adicionarPet(nomeCliente: string, pet: Pet): boolean {
    const cliente = this.buscarCliente(nomeCliente)
    if (!cliente) return false
    cliente.getPets.push(pet)  // acessa o array pelo getter e adiciona direto
    return true
  }

  listarPets(nomeCliente: string): Pet[] | null {
    const cliente = this.buscarCliente(nomeCliente)
    if (!cliente) return null
    return cliente.getPets
  }

  editarPet(nomeCliente: string, nomePet: string, novosDados: Partial<Pet>): boolean {
    const cliente = this.buscarCliente(nomeCliente)
    if (!cliente) return false
    const pet = cliente.getPets.find(p => p.getNome === nomePet)
    if (!pet) return false

    if (novosDados.nome !== undefined) pet['nome'] = novosDados.nome
    if (novosDados.raca !== undefined) pet['raca'] = novosDados.raca
    if (novosDados.genero !== undefined) pet['genero'] = novosDados.genero
    if (novosDados.tipo !== undefined) pet['tipo'] = novosDados.tipo

    return true
  }

  deletarPet(nomeCliente: string, nomePet: string): boolean {
    const cliente = this.buscarCliente(nomeCliente)
    if (!cliente) return false
    const pets = cliente.getPets
    const totalAntes = pets.length
    cliente['pets'] = pets.filter(p => p.getNome !== nomePet)
    return cliente.getPets.length < totalAntes
  }
}