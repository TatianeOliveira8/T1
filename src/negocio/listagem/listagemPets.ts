import Listagem from "./listagem";
import Cliente from "../../modelo/cliente";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes; }

    public listar(): void {
        console.log("\nListagem de Pets de todos os clientes:\n");

        this.clientes.forEach(cliente => {
            const pets = cliente.getPets;
            if (pets.length > 0) {
                console.log(`Cliente: ${cliente.nome}`);
                pets.forEach(pet => {
                    console.log(`- Nome: ${pet.getNome}`);
                    console.log(`  Tipo: ${pet.getTipo}`);
                    console.log(`  Raça: ${pet.getRaca}`);
                    console.log(`  Gênero: ${pet.getGenero}`);
                    console.log('---');
                }); 
            }
        });
    }
}
