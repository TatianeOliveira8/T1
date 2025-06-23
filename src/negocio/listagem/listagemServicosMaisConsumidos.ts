import Servico from "../../modelo/servico"
import Cliente from "../../modelo/cliente"
import Listagem from "./listagem"

export default class ListagemServicosMaisConsumidos extends Listagem {
  private servicos: Array<Servico>
  private clientes: Array<Cliente>

  constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
    super()
    this.servicos = servicos
    this.clientes = clientes }

  public listar(): void {
    if (this.servicos.length === 0) {
      console.log("Nenhum serviço cadastrado.")
      return }
    if (this.clientes.length === 0) {
      console.log("Nenhum cliente cadastrado.")
      return }

    const servicosComTotal = this.servicos.map(servico => {
      const totalConsumo = this.clientes.reduce((total, cliente) => {
        return total + cliente.getServicosConsumidos.filter(s => s.id === servico.id).length
      }, 0)
      return { servico, totalConsumo }
    })

    servicosComTotal.sort((a, b) => b.totalConsumo - a.totalConsumo)

    console.log("Serviços mais consumidos:")
    servicosComTotal.forEach(({ servico, totalConsumo }) => {
      console.log(`Serviço: ${servico.nome} | Total consumido: ${totalConsumo}`)
    })
  }
}

// TESTE
// if (require.main === module) {
//   const Servico = require("../../modelo/servico").default
//   const Cliente = require("../../modelo/cliente").default
//   const CPF = require("../../modelo/cpf").default
//
//   // Serviços
//   const serv1 = new Servico(1, "Banho", 70)
//   const serv2 = new Servico(2, "Consulta", 150)
//   const serv3 = new Servico(3, "Vacinação", 100)
//
//   // Clientes
//   const c1 = new Cliente("Alice", "Alice Silva", new CPF("111.111.111-11", new Date()))
//   c1.adicionarServicoConsumido(serv1)
//   c1.adicionarServicoConsumido(serv1)
//   c1.adicionarServicoConsumido(serv2)
//
//   const c2 = new Cliente("Bruno", "Bruno Souza", new CPF("222.222.222-22", new Date()))
//   c2.adicionarServicoConsumido(serv2)
//
//   const c3 = new Cliente("Carla", "Carla Pereira", new CPF("333.333.333-33", new Date()))
//   c3.adicionarServicoConsumido(serv3)
//   c3.adicionarServicoConsumido(serv3)
//
//   const clientesTeste = [c1, c2, c3]
//   const servicosTeste = [serv1, serv2, serv3]
//
//   const listagem = new (require("./listagemServicosMaisConsumidos").default)(servicosTeste, clientesTeste)
//   listagem.listar()
// }
