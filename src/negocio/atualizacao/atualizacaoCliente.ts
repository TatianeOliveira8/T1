import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Atualizar from "./atualizacao";
import ServicoCliente from "../servicosCliente";

export default class AtualizarCliente extends Atualizar {
  private clientes: Cliente[];
  private entrada: Entrada;

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada(); }

  public atualizar(): void {
    console.log("\nAtualização de Cliente:");
    const cpfCliente = this.entrada.receberTexto("Digite o CPF do cliente que deseja atualizar: ");
    const cliente = ServicoCliente.encontrarPorCPF(this.clientes, cpfCliente);
    if (!cliente) {
      console.log("\nCliente não encontrado.\n");
      return }

    console.log(`\nNome atual: ${cliente.nome}`);
    console.log(`Nome social atual: ${cliente.nomeSocial}`);
    console.log("\nAtualize os dados (deixe em branco para manter):");

    const novoNome = this.entrada.receberTexto("Novo nome: ");
    if (novoNome) cliente.nome = novoNome;
    const novoNomeSocial = this.entrada.receberTexto("Novo nome social: ");
    if (novoNomeSocial) cliente.nomeSocial = novoNomeSocial;


    console.log("\nCliente atualizado com sucesso.\n");
  }
}
