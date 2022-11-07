import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Produto from "../modelo/produto";


export default class CadastroProduto extends Cadastro {
    private Produtos: Array<Produto>
    private entrada: Entrada
    constructor(Produtos: Array<Produto>) {
        super()
        this.Produtos = Produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `)
        let produto = new Produto(nome, preco)
        this.Produtos.push(produto)
        console.log(`\nCadastro de produto concluído :)\n`);
    }
}