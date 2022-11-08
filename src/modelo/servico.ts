export default class Servico {
    public nome: string
    public preco: number
    public provedor: string
    constructor(nome: string, preco: number, provedor: string){
        this.nome = nome
        this.preco = preco
        this.provedor = provedor
    }
    
}