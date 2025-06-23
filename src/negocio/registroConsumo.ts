import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"
import ListagemServicos from "./listagem/listagemServicos"
import ListagemProduto from "./listagem/listagemProdutos"

export default class RegistroConsumo {
  private clientes: Array<Cliente>
  private servicos: Array<Servico>
  private produtos: Array<Produto>
  private entrada: Entrada
  private listagemServicos: ListagemServicos
  private listagemProduto: ListagemProduto

  constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
    this.clientes = clientes
    this.produtos = produtos
    this.servicos = servicos
    this.entrada = new Entrada()
    this.listagemServicos = new ListagemServicos(this.servicos)
    this.listagemProduto = new ListagemProduto(produtos)
  }

  public registrar(): void {
    console.log("\nRegistro de consumo de produto ou serviço")

    if (this.clientes.length === 0) {
      console.log("Nenhum cliente cadastrado.")
      return
    }
    if (this.produtos.length === 0 && this.servicos.length === 0) {
      console.log("Nenhum produto ou serviço cadastrado.")
      return
    }

    let cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente (somente números): ")

    const cliente = this.clientes.find(c => c.getCpf.getValor === cpfCliente)
    if (!cliente) {
      console.log("Cliente não encontrado.")
      return
    }

    console.log("\nProdutos disponíveis:")
    this.produtos.forEach(p => {
      console.log(`ID: P${p.id} | Nome: ${p.nome} | Preço: R$${p.preco.toFixed(2)}`)
    })

    console.log("\nServiços disponíveis:")
    this.servicos.forEach(s => {
      console.log(`ID: S${s.id} | Nome: ${s.nome} | Preço: R$${s.preco.toFixed(2)}`)
    })

    let codigo = this.entrada.receberTexto("Informe o código do produto ou serviço consumido (ex: P1 ou S2): ").toUpperCase()

    if (codigo.startsWith("P")) {
      let id = parseInt(codigo.substring(1))
      const produto = this.produtos.find(p => p.id === id)
      if (produto) {
        cliente.getProdutosConsumidos.push(produto)
        console.log(`\nProduto "${produto.nome}" registrado para o cliente ${cliente.nome}.`)
      } else {
        console.log("Produto não encontrado.")
      }
    } else if (codigo.startsWith("S")) {
      let id = parseInt(codigo.substring(1))
      const servico = this.servicos.find(s => s.id === id)
      if (servico) {
        cliente.getServicosConsumidos.push(servico)
        console.log(`\nServiço "${servico.nome}" registrado para o cliente ${cliente.nome}.`)
      } else {
        console.log("Serviço não encontrado.")
      }
    } else {
      console.log("Código inválido. Use P(id) para produtos ou S(id) para serviços.")
    }
  }
}
