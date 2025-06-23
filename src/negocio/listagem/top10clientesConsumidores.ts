import Cliente from "../../modelo/cliente";
import Listagem from "./listagem"; 

export default class Top10ClientesConsumidores extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    if (this.clientes.length === 0) {
      console.log("Nenhum cliente cadastrado.");
      return;
    }

    const clientesComTotal = this.clientes.map(cliente => ({
      cliente,
      totalConsumo: cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
    }));

    clientesComTotal.sort((a, b) => b.totalConsumo - a.totalConsumo);

    const top10 = clientesComTotal.slice(0, 10);

    if (top10.length === 0) {
      console.log("Nenhum consumo registrado.");
      return;
    }

    console.log("Top 10 clientes que mais consumiram produtos e serviços:");
    top10.forEach(({ cliente, totalConsumo }, index) => {
      console.log(`${index + 1}. Nome: ${cliente.nome} | CPF: ${cliente.getCpf.getValor} | Total consumido: ${totalConsumo}`);
    });
  }
}
// TESTE 
// if (require.main === module) {
//   const Produto = require("../../modelo/produto").default;
//   const Servico = require("../../modelo/servico").default;
//   const Cliente = require("../../modelo/cliente").default;
//   const CPF = require("../../modelo/cpf").default;

//   const prod1 = new Produto(1, "Ração Premium", 100);
//   const prod2 = new Produto(2, "Coleira", 40);
//   const serv1 = new Servico(1, "Banho", 70);
//   const serv2 = new Servico(2, "Consulta", 150);

//   const c1 = new Cliente("Alice", "Alice Silva", new CPF("111.111.111-11", new Date()));
//   c1.adicionarProdutoConsumido(prod1);
//   c1.adicionarProdutoConsumido(prod2);
//   c1.adicionarServicoConsumido(serv1);

//   const c2 = new Cliente("Bruno", "Bruno Souza", new CPF("222.222.222-22", new Date()));
//   c2.adicionarProdutoConsumido(prod2);
//   c2.adicionarServicoConsumido(serv2);
//   c2.adicionarServicoConsumido(serv1);

//   const c3 = new Cliente("Carla", "Carla Pereira", new CPF("333.333.333-33", new Date()));
//   c3.adicionarProdutoConsumido(prod2);

//   const clientesTeste = [c1, c2, c3];

//   const top10Clientes = new Top10ClientesConsumidores(clientesTeste);
//   top10Clientes.listar();
// }
