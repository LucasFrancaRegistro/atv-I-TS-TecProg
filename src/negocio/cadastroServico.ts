import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Servico from "../modelo/servico";


export default class CadastroServico extends Cadastro {
    private Servicos: Array<Servico>
    private entrada: Entrada
    constructor(Servicos: Array<Servico>) {
        super()
        this.Servicos = Servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `)
        let provedor = this.entrada.receberTexto('Por favor informe o provedor do serviço: ')
        let produto = new Servico(nome, preco, provedor)
        this.Servicos.push(produto)
        console.log(`\nCadastro de serviço concluído :)\n`);
    }
}