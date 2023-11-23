function adicionarSeletor() {
    var adicionar = document.getElementById("perso");
    adicionar.classList.add("personalizacao");
}

function adicionarNovoSeletor() {
    var adicionar = document.getElementById("perso");
    adicionar.classList.add("personalizacao2");
}


function removerSeletor() {
    var remover = document.getElementById("perso");
    remover.classList.remove("personalizacao");
    remover.classList.remove("personalizacao2");
}