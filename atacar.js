function atacar() {
    let ataque = " ";

    switch (this.tipo) {
        case "mago":
            console.log("usou magia");
            break;

        case "guerreiro":
            console.log("(usou espada");
            break;

        case "monge":
            console.log("usou artes marciais");
            break;

        case "ninja":
            console.log("usou shuriken");
            break;
    }
}
