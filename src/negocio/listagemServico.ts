import Listagem from "./listagem";
import Servico from "../modelo/servico";

export default class ListagemServico extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Preco: ` + servico.preco);
            console.log(`provedor: ` + servico.provedor)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}