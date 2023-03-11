import opcaoUsuario from 'readline-sync';
import { salarioMinimo, inflacao } from './dados-salariais.js';
import { listarSalariosMinimos, listarIndicePrecosConsumidor, listarCrescimentoSalarial } from './calculocomparativo.js';

console.log('1 - Listar os salários mínimos de 2010 à 2022')
console.log('2 - Listar o índice IPCA de 2010 à 2022')
console.log('3 - Comparar e listar a porcentagem de crescimento salarial com a inflação (IPCA)')

let alternativa = opcaoUsuario.question('\nEscolha uma das alternativas: ')

switch (Number(alternativa)) {
    case 1:
        salarioMinimo.filter(listarSalariosMinimos);
        break;
    case 2:
        inflacao.filter(listarIndicePrecosConsumidor);
        break;
    case 3:
        listarCrescimentoSalarial(salarioMinimo, inflacao);
        break;
    default:
        console.log('Opção inválida!')
        break;
}



