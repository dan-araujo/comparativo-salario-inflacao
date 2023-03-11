function listarSalariosMinimos(salarioMinimo) {
    let ano = "\nAno: ".padEnd(40, ".") + salarioMinimo.ano;
    let salario = "\nSalário mínimo: ".padEnd(35, ".") + "R$ " + salarioMinimo.salario.toFixed(2).replace(".", ",") + "\n";
    console.log(ano + salario);
}

function listarIndicePrecosConsumidor(inflacao) {
    let ano = "\nAno: ".padEnd(40, ".") + inflacao.ano;
    let inflacaoIpca = "\nInflação IPCA: ".padEnd(40, ".") + inflacao.ipca.toFixed(2).replace(".", ",") + "%\n";
    console.log(ano + inflacaoIpca);
}

function listarCrescimentoSalarial(salarioMinimo, inflacao) {
    for (let i = 0; i <= salarioMinimo.length - 1; i++) {

        let percentual = calcularPercentualCrescimento(i);

        let ano = "\nAno: ".padEnd(40, ".") + salarioMinimo[i].ano;
        let listaSalarios = "\nSalário mínimo: ".padEnd(35, ".") + "R$ " + salarioMinimo[i].salario.toFixed(2).replace(".", ",");
        let crescimentoSalarial = "\nCrescimento Salarial: ".padEnd(40, ".") + percentual;
        let ipca = "\nInflação IPCA: ".padEnd(40, ".") + inflacao[i].ipca.toFixed(2).replace(".", ",") + "%";
        console.log(ano + listaSalarios + crescimentoSalarial + ipca)

    }

    function calcularPercentualCrescimento(i) {
        let salario = salarioMinimo[i].salario;
        let percentualCrescimento;
        let valorCrescimento;
        if (i > 0) {
            let salarioAnterior = salarioMinimo[i - 1].salario;
            let diferencaSalarial = salario - salarioAnterior;
            percentualCrescimento = (diferencaSalarial / salarioAnterior) * 100;
            valorCrescimento = percentualCrescimento.toFixed(2).replace(".", ",") + "%";
        } else {
            valorCrescimento = " -";
        }
        return valorCrescimento;
    }
}


export { listarSalariosMinimos, listarIndicePrecosConsumidor, listarCrescimentoSalarial };



