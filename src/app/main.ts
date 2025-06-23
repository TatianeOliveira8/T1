import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastro/cadastroCliente";
import ListagemClientes from "../negocio/listagem/listagemClientes";
import CadastroPets from "../negocio/cadastro/cadastroPet";
import ListagemPets from "../negocio/listagem/listagemPets";
import AtualizarPet from "../negocio/atualizacao/atualizacaoPet";
import  RemoverPet from  "../negocio/remocao/remocaoPet"
import AtualizarCliente from "../negocio/atualizacao/atualizacaoCliente";
import RemoverCliente from "../negocio/remocao/remocaoCliente"; // <-- nova importação
import CadastroProduto from "../negocio/cadastro/cadastroProduto";
import ListagemProdutos from "../negocio/listagem/listagemProdutos";
import AtualizarProduto from "../negocio/atualizacao/atualizacaoProduto";
import RemocaoProduto from "../negocio/remocao/remocaoProduto";
import CadastroServico from "../negocio/cadastro/cadastroServico";
import ListagemServicos from "../negocio/listagem/listagemServicos";
import AtualizacaoServico from "../negocio/atualizacao/atualizacaoServico";
import RemocaoServico from "../negocio/remocao/remocaoServico";
import RegistroConsumo from "../negocio/registroConsumo";
import Top10ClientesConsumidores from "../negocio/listagem/top10clientesConsumidores";
import ListagemProdutosMaisConsumidos from "../negocio/listagem/listagemProdutosMaisConsumidos";
import ListagemServicosMaisConsumidos from "../negocio/listagem/listagemServicosMaisConsumidos";   
import ListagemConsumoPorTipoRaca from "../negocio/listagem/listagemConsumoPorTipoRaca"; 
import ListagemTop5ClientesPorValor from "../negocio/listagem/listagemTop5ClientesPorValor";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar pet`);
    console.log(`4 - Listar todos os pets do cliente`)
    console.log(`5 - Atualizar pets do cliente`);
    console.log(`6 - Atualizar cliente`); 
    console.log(`7 - Remover pet do cliente`); 
    console.log(`8 - Remover cliente`);
    console.log(`9 - Cadastrar produto`); 
    console.log(`10 - Listar produtos`);
    console.log(`11 - Atualizar produto`);
    console.log(`12 - Remover produto`);
    console.log(`13 - Cadastrar serviço`);
    console.log(`14 - Listar serviços`);
    console.log(`15 - Atualizar serviço`);
    console.log(`16 - Remover serviço`);
    console.log(`17 - Registrar consumo de produto ou serviço`);
    console.log(`18 - Listar top 10 clientes que mais consumiram produtos e serviços`);
    console.log(`19 - Listar produtos mais consumidos`);
    console.log(`20 - Listar serviços mais consumidos`);
    console.log(`21 - Listar consumo de produtos e serviços por tipo e raça de pet`);
    console.log(`22 - Listar top 5 clientes que mais consumiram em valor`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cadastroPet = new CadastroPets(empresa.getPets, empresa.getClientes);
            cadastroPet.cadastrar();
            break;
        case 4:
            const listagemPets = new ListagemPets(empresa.getClientes)
            listagemPets.listar()
            break;
        case 5:
            let atualizarPets = new AtualizarPet(empresa.getClientes);
            atualizarPets.atualizar();
            break;
        case 6:
            let atualizar = new AtualizarCliente(empresa.getClientes);
            atualizar.atualizar();
            break;
        case 7:
            let removerPet = new RemoverPet(empresa.getClientes);
            removerPet.remover();
            break;
        case 8:
            let removerCliente = new RemoverCliente(empresa.getClientes);
            removerCliente.remover();
            break;
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 10:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 11:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos);
            atualizarProduto.atualizar();
            break;
        case 12:
            let removerProduto = new RemocaoProduto(empresa.getProdutos);   
            removerProduto.remover();
            break;
        case 13:
            let cadastroServico = new CadastroServico(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 14:
            let listagemServicos = new ListagemServicos(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 15:
            let atualizarServico = new AtualizacaoServico(empresa.getServicos);
            atualizarServico.atualizar();
            break;
        case 16:
            let removerServico = new RemocaoServico(empresa.getServicos);
            removerServico.remover();
            break;
        case 17:
            let registroConsumo = new RegistroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            registroConsumo.registrar();
            break;
        case 18:
            let top10ClientesConsumidores = new Top10ClientesConsumidores(empresa.getClientes);
            top10ClientesConsumidores.listar();
            break;
        case 19:
            let listagemProdutosMaisConsumidos = new ListagemProdutosMaisConsumidos(empresa.getProdutos, empresa.getClientes);
            listagemProdutosMaisConsumidos.listar();
            break;
        case 20:
            let listagemServicosMaisConsumidos = new ListagemServicosMaisConsumidos(empresa.getServicos, empresa.getClientes);
            listagemServicosMaisConsumidos.listar();
            break;
        case 21:
            const entradaTipo = entrada.receberTexto("Digite o tipo do pet (ex: Cachorro, Gato): ");
            const entradaRaca = entrada.receberTexto("Digite a raça do pet (ex: Poodle, Labrador): ");
            const listagemPorTipoRaca = new ListagemConsumoPorTipoRaca(empresa.getClientes, entradaTipo, entradaRaca);
            listagemPorTipoRaca.listar();
            break;
        case 22:
            const listagemTop5ClientesPorValor = new ListagemTop5ClientesPorValor(empresa.getClientes);
            listagemTop5ClientesPorValor.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}