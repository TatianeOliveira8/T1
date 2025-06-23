import Listagem from "./listagem"
import Cliente from "../../modelo/cliente"

export default class ListagemTop5ClientesPorValor extends Listagem {
  private clientes: Cliente[]

  constructor(clientes: Cliente[]) {
    super()
    this.clientes = clientes }

  public listar(): void {
    const valoresClientes = this.clientes.map(cliente => {
      const totalProdutos = cliente.getProdutosConsumidos
        .reduce((soma, prod) => soma + prod.preco, 0)
      const totalServicos = cliente.getServicosConsumidos
        .reduce((soma, serv) => soma + serv.preco, 0)
      const totalGasto = totalProdutos + totalServicos

      return {
        nome: cliente.nome,
        cpf: cliente.getCpf.getValor,
        totalGasto: totalGasto }
    })

    const top5 = valoresClientes
      .sort((a, b) => b.totalGasto - a.totalGasto)
      .slice(0, 5)

    console.log("Top 5 clientes que mais consumiram em valor:")
    top5.forEach((c, i) => {
      console.log(`${i + 1} - ${c.nome} (CPF: ${c.cpf}) - R$ ${c.totalGasto.toFixed(2)}`)
    })
  }
}

// TESTE 
// if (require.main === module) {
//   const Produto = require("../../modelo/produto").default;
//   const Servico = require("../../modelo/servico").default;
//   const Cliente = require("../../modelo/cliente").default;
//   const CPF = require("../../modelo/cpf").default;
//
// const prod1 = new Produto(1, "Ração Premium", 100);
// const prod2 = new Produto(2, "Coleira", 40);
// const serv1 = new Servico(1, "Banho", 70);
// const serv2 = new Servico(2, "Consulta", 150);
//
//   const c1 = new Cliente("Alice", "Alice Silva", new CPF("111.111.111-11", new Date()));
//   c1.adicionarProdutoConsumido(prod1);
//   c1.adicionarProdutoConsumido(prod1);
//   c1.adicionarServicoConsumido(serv1);
//
//   const c2 = new Cliente("Bruno", "Bruno Souza", new CPF("222.222.222-22", new Date()));
//   c2.adicionarProdutoConsumido(prod2);
//   c2.adicionarServicoConsumido(serv2);
//
//   const c3 = new Cliente("Carla", "Carla Pereira", new CPF("333.333.333-33", new Date()));
//   c3.adicionarProdutoConsumido(prod2);
//   c3.adicionarProdutoConsumido(prod2);
//   c3.adicionarProdutoConsumido(prod2);
//
//   const c4 = new Cliente("Daniel", "Daniel Costa", new CPF("444.444.444-44", new Date()));
//   c4.adicionarServicoConsumido(serv2);
//   c4.adicionarServicoConsumido(serv2);
//
//   const c5 = new Cliente("Erica", "Erica Lima", new CPF("555.555.555-55", new Date()));
//   c5.adicionarProdutoConsumido(prod1);
//   c5.adicionarServicoConsumido(serv1);
//
//   const clientesTeste = [c1, c2, c3, c4, c5];
//
//   const listagemTeste = new ListagemTop5ClientesPorValor(clientesTeste);
//   listagemTeste.listar();
// }
