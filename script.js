// Mensagem de boas-vindas
window.onload = function () {
    alert("Bem-vindo ao site Agro Forte Sustentável!");
};

// Curiosidades do agro
const curiosidades = [
    "O Brasil está entre os maiores produtores de alimentos do mundo.",
    "Drones ajudam a monitorar lavouras e identificar problemas rapidamente.",
    "A rotação de culturas melhora a qualidade do solo.",
    "O controle biológico reduz a necessidade de defensivos químicos.",
    "A agricultura de precisão ajuda a economizar água e fertilizantes."
];

function mostrarCuriosidade() {
    const indice = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").innerHTML =
        curiosidades[indice];
}

// Voltar ao topo da página
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



