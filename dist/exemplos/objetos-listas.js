"use strict";
const pessoa = {
    nome: 'mariana',
    idade: 20,
    profissao: 'desenvolvedora'
};
pessoa.idade = 29;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: 'Pedreiro'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'vanessa',
    idade: 20,
    profissao: Profissao.Desenvolvedora
};
