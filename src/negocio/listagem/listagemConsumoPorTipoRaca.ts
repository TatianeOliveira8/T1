import Listagem from "./listagem"
import Cliente from "../../modelo/cliente"
// import Produto from "../../modelo/produto"
// import Servico from "../../modelo/servico"
// import Pet from "../../modelo/pet"

type Consumo = {
  nome: string
  quantidade: number
}

export default class ListagemConsumoPorTipoRaca extends Listagem {
  private clientes: Cliente[]
  private tipoPet: string
  private racaPet: string

  constructor(clientes: Cliente[], tipoPet: string, racaPet: string) {
    super()
    this.clientes = clientes
    this.tipoPet = tipoPet
    this.racaPet = racaPet
  }

  public listar(): void {
    const produtosMap: Map<string, number> = new Map()
    const servicosMap: Map<string, number> = new Map()

    const clientesFiltrados = this.clientes.filter(cliente =>
      cliente.getPets.some(pet => pet.getTipo === this.tipoPet && pet.getRaca === this.racaPet)
    )

    clientesFiltrados.forEach(cliente => {
      cliente.getProdutosConsumidos.forEach(produto => {
        produtosMap.set(produto.nome, (produtosMap.get(produto.nome) ?? 0) + 1) })

      cliente.getServicosConsumidos.forEach(servico => {
        servicosMap.set(servico.nome, (servicosMap.get(servico.nome) ?? 0) + 1)  })
    })

    const produtosOrdenados = Array.from(produtosMap.entries())
      .map(([nome, quantidade]) => ({ nome, quantidade }))
      .sort((a, b) => b.quantidade - a.quantidade)

    const servicosOrdenados = Array.from(servicosMap.entries())
      .map(([nome, quantidade]) => ({ nome, quantidade }))
      .sort((a, b) => b.quantidade - a.quantidade)

    console.log(`Produtos mais consumidos por pets tipo: ${this.tipoPet} raça: ${this.racaPet}`)
    produtosOrdenados.forEach((p, i) => {
      console.log(`${i + 1} | ${p.nome} | ${p.quantidade} vezes`) })

    console.log(`\nServiços mais consumidos por pets tipo: ${this.tipoPet} raça: ${this.racaPet}`)
    servicosOrdenados.forEach((s, i) => {
      console.log(`${i + 1} | ${s.nome} | ${s.quantidade} vezes`) })
  }
}

// Teste tire o comentario para testar
// if (require.main === module) {
//   const clientes: Cliente[] = []

//   const produto1 = new Produto(1, "Ração Premium", 100)
//   const produto2 = new Produto(2, "Brinquedo", 50)
//   const servico1 = new Servico(1, "Banho", 80)
//   const servico2 = new Servico(2, "Consulta", 120)

//   for (let i = 1; i <= 5; i++) {
//     const cliente = new Cliente(`Cliente ${i}`, `Social ${i}`, new (require("../../modelo/cpf").default)(`000.000.000-0${i}`, new Date()))
//     const pet = new Pet(`Pet ${i}`, "Labrador", "Macho", "Cachorro")
//     cliente.adicionarPet(pet)

//     // Simula consumo diferente pra cada cliente
//     if (i % 2 === 0) {
//       cliente.getProdutosConsumidos.push(produto2)
//       cliente.getServicosConsumidos.push(servico2)
//     } else {
//       cliente.getProdutosConsumidos.push(produto1)
//       cliente.getServicosConsumidos.push(servico1)
//     }

//     // cliente 5 consome mais
//     if (i === 5) {
//       cliente.getProdutosConsumidos.push(produto1, produto2)
//       cliente.getServicosConsumidos.push(servico1, servico2)
//     }

//     clientes.push(cliente)
//   }

//   const listagem = new ListagemConsumoPorTipoRaca(clientes, "Cachorro", "Labrador")
//   listagem.listar()
// }

