const monstros = [
    {
        id: 1,
        nome: "Osvaldo",
        altura: 1.70,
        foto: "https://robohash.org/Osvaldo",
        abilidade: "soco-forte",
       
    },
    {
        id: 2,
        nome: "Ranger",
        altura: 1.80,
        foto: "https://robohash.org/Ranger",
        abilidade: "pulo-alto",
       
    },
    {
        id: 3,
        nome: "Gular",
        altura: 1.90,
        foto: "https://robohash.org/Gular",
        abilidade: "chute-poderoso"
       
    },
    {
        id: 4,
        nome: "Ancora",
        altura: 1.80,
        foto: "https://robohash.org/Ancora",
        abilidade: "Punho-de-fogo"
        
    }
]
const secao = document.querySelector(".Monstros")
const botao = document.querySelector(".btn")
botao.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")
})

const todosOsMonstros = monstros.map((monstro) => {
    return `<div>
    <p>Nome:${monstro.nome}</p>
    <p>Altura:${monstro.altura}</p>
    <p class="Habilidade">Habilidade:${monstro.abilidade}</p>
    <img src="${monstro.foto}">
    <div>`
})
secao.innerHTML = todosOsMonstros

