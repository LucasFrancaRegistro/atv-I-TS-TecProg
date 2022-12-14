import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProduto from "../negocio/listagemProduto";
import ListagemServico from "../negocio/listagemServico";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCli = new CadastroCliente(empresa.getClientes)
            cadastroCli.cadastrar()
            break;
        case 2:
            let listagemCli = new ListagemClientes(empresa.getClientes)
            listagemCli.listar()
            break;
        case 3:
            let cadastroPro = new CadastroProduto(empresa.getProdutos)
            cadastroPro.cadastrar()
            break;
        case 4:
            let listagemPro = new ListagemProduto(empresa.getProdutos)
            listagemPro.listar()
            break;
        case 5:
            let cadastroSer = new CadastroServico(empresa.getServicos)
            cadastroSer.cadastrar()
            break;
        case 6:
            let listagemSer = new ListagemServico(empresa.getServicos)
            listagemSer.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}