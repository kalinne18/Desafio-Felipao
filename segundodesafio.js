let saldoVitorias = calcularPartidas(222, 54)

function calcularPartidas(vitorias, derrotas) {

    let resultado = vitorias - derrotas

    return resultado
}

if (saldoVitorias <= 10) {
    nivel = "Ferro";
} else if (11 <= saldoVitorias && saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (21 <= saldoVitorias && saldoVitorias <= 50) {
    nivel = "Prata";
} else if (51 <= saldoVitorias && saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (81 <= saldoVitorias && saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (91 <= saldoVitorias && saldoVitorias <= 100) {
    nivel = "Lendário";
} else if (saldoVitorias >= 101) {
    nivel = "Imortal";
}
console.log("O Herói com saldo de " + saldoVitorias + " está no nível de " + nivel);
