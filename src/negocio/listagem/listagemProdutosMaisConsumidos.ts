import Listagem from "./listagem"
import Cliente from "../../modelo/cliente"
import Produto from "../../modelo/produto"

export default class ListagemProdutosMaisConsumidos extends Listagem {
  private produtos: Produto[]
  private clientes: Cliente[]

  constructor(produtos: Produto[], clientes: Cliente[]) {
    super()
    this.produtos = produtos
    this.clientes = clientes }

  public listar(): void {
    if (this.produtos.length === 0 || this.clientes.length === 0) {
      console.log("Nenhum produto ou cliente cadastrado.")
      return }

    const consumoPorProduto: { produto: Produto; quantidade: number }[] = this.produtos.map(produto => {
      const quantidade = this.clientes.reduce((total, cliente) => {
        return total + cliente.getProdutosConsumidos.filter(p => p.id === produto.id).length
      }, 0)
      return { produto, quantidade } })

    consumoPorProduto.sort((a, b) => b.quantidade - a.quantidade)

    console.log("\nProdutos mais consumidos:")
    consumoPorProduto.forEach(({ produto, quantidade }) => {
      if (quantidade > 0) {
        console.log(`Produto: ${produto.nome} | Total consumido: ${quantidade}`) }
    })
  }
}
// TESTE
// if (require.main === module) {
//   const Produto = require("../../modelo/produto").default
//   const Cliente = require("../../modelo/cliente").default
//   const CPF = require("../../modelo/cpf").default
//
//   // Produtos
//   const prod1 = new Produto(1, "Ração Premium", 100)
//   const prod2 = new Produto(2, "Coleira", 40)
//   const prod3 = new Produto(3, "Brinquedo", 30)
//
//   // Clientes
//   const c1 = new Cliente("Alice", "Alice Silva", new CPF("111.111.111-11", new Date()))
//   c1.adicionarProdutoConsumido(prod1)
//   c1.adicionarProdutoConsumido(prod1)
//   c1.adicionarProdutoConsumido(prod2)
//
//   const c2 = new Cliente("Bruno", "Bruno Souza", new CPF("222.222.222-22", new Date()))
//   c2.adicionarProdutoConsumido(prod2)
//   c2.adicionarProdutoConsumido(prod3)
//
//   const c3 = new Cliente("Carla", "Carla Pereira", new CPF("333.333.333-33", new Date()))
//   c3.adicionarProdutoConsumido(prod3)
//   c3.adicionarProdutoConsumido(prod3)
//
//   const clientesTeste = [c1, c2, c3]
//   const produtosTeste = [prod1, prod2, prod3]
//
//   const listagem = new (require("./listagemProdutosMaisConsumidos").default)(produtosTeste, clientesTeste)
//   listagem.listar()
// }
