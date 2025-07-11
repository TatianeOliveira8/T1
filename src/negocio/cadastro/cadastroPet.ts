import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Pet from "../../modelo/pet"
import Cadastro from "./cadastro"
import ServicoCliente from "../../negocio/servicosCliente";


export default class CadastroPets extends Cadastro {
    private pets: Array<Pet>
    private entrada: Entrada
    private clientes: Array<Cliente>
 
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet (M/F): `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let cpf = this.entrada.receberTexto(`Por favor informe o CPF do responsável pelo pet: `)

       const cliente = ServicoCliente.encontrarPorCPF(this.clientes, cpf);

        

        if (cliente) {
            let pet = new Pet(nome, raca, genero, tipo);
            cliente.adicionarPet(pet);
            console.log(`\nCadastro de pet concluído :)\n`);} 
            else { console.log(`Cliente não encontrado :(\n`); }
    }
}