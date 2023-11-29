console.log("Olá")
console.log("Desafio do Filipão")
console.log("Desafio Classificador de nível de Herói")

let Heroi = "O Todo Poderoso"
let xp = 11000


switch (true) {
    case (xp) <= 1000:
        console.log("O herói de nome " + Heroi + " está no nível de" + " Ferro");
        break

    case (1001 <= xp && xp <= 2000):
        console.log("O herói de nome " + Heroi + " está no nível de" + " Bronze");
        break

    case (2001 <= xp && xp <= 6000):
        console.log("O herói de nome " + Heroi + " está no nível de" + " Prata");
        break

    case (6001 <= xp && xp <= 7000):
        console.log("O herói de nome " + Heroi + " está no nível de" + " Ouro");
        break

    case (7001 <= xp && xp <= 8000):
        console.log("O herói de nome " + Heroi + " está no nível de" + " Platina");
        break

    case (8001 <= xp && xp <= 9000):
        console.log("O herói de nome " + Heroi + " está no nível de" + " Ascendente");
        break

    case (9001 <= xp && xp <= 10000):
        console.log("O herói de nome " + Heroi + " está no nível de" + " Ouro");
        break

    case (xp) >= 10001:
        console.log("O herói de nome " + Heroi + " está no nível de" + " Radiante");

}
