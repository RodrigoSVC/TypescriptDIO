
enum Profissao {
    Padeiro, 
    Atriz, 
}
interface Pessoa{
    nome: string,
    idade: number,
    profissao: Profissao,
}

let pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Padeiro
}

let pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}


let pessoa3: Pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
}


let pessoa4: Pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}