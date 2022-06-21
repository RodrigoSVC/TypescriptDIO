const pessoa = {
    nome: 'mariana',
    idade: 20,
    profissao: 'desenvolvedora'
}

pessoa.idade = 29;


const andre: {nome: string, idade:number, profissao:string} = {
    nome: "Andre",
    idade: 25,
    profissao: 'Pedreiro'
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const vanessa: Pessoa = {
    nome: 'vanessa',
    idade: 20,
    profissao: Profissao.Desenvolvedora

}
