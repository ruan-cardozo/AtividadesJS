/*
Uma financeira usa o seguinte critério para conceder empréstimos: 
o valor total do empréstimo deve ser até dez vezes o valor da renda mensal 
do solicitante e o valor da prestação deve ser no máximo 30% da renda mensal do solicitante. 
Escreva um programa que leia a renda mensal de um solicitante, 
o valor total do empréstimo solicitado e o número de prestações que o solicitante
 deseja pagar e informe se o empréstimo pode ou não ser concedido.
*/
import entradados from  'readline-sync'

let nomeSolicitante = entradados.question("Informe o nome do solicitante: ")
let rendaMensal = entradados.questionFloat("Informe a renda mensal do solicitante: ")
let valorEmprestimo = entradados.questionFloat("Informe o valor emprestimo: ")
let numeroPrestacao = entradados.questionInt("Informe o numero de prestacao mensal: ")

export default {nomeSolicitante, rendaMensal, valorEmprestimo, numeroPrestacao}
