import Cliente from "../modelo/cliente";

export default class ServicoCliente {
  public static encontrarPorCPF(clientes: Cliente[], cpf: string): Cliente | undefined {
    return clientes.find(cliente => cliente.getCpf.getValor === cpf);
  }
}
