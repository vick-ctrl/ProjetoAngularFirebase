export interface ILivros{
    isbn: string;
    titulo: string;
    categoria: ICategoria[]
}
export interface ICategoria{
    nome: string;
}
export interface Produtos{
    nome: string;
    preco: number;
}