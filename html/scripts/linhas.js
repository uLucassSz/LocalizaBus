const linhas = [
    {
        id: 1,
        name: "Linha 01",
        street: "Bela Vista - Rodoviária"
    },
    {
        id: 2,
        name: "Linha 02",
        street: "Arco íris - Mãe Preta"
    },
    {
        id: 3,
        name: "Linha 06",
        street: "Cervezão"
    },
    {
        id: 4,
        name: "Linha 07",
        street: "Circular 01"
    },
    {
        id: 5,
        name: "Linha 08",
        street: "Circular 02"
    },
    {
        id: 6,
        name: "Linha 09",
        street: "Paineiras - Santa Eliza"
    },
    {
        id: 7,
        name: "Linha 10",
        street: "Copacabana - Vila Paulista"
    },
    {
        id: 8,
        name: "Linha 11",
        street: "Vila Olinda"
    },
    {
        id: 9,
        name: "Linha 12",
        street: "Palmeiras"
    },
    {
        id: 10,
        name: "Linha 14",
        street: "Bom Sucesso"
    },
    {
        id: 11,
        name: "Linha 15",
        street: "Assistência"
    },
    {
        id: 12,
        name: "Linha 16",
        street: "Centenário - Rodoviária"
    },
    {
        id: 13,
        name: "Linha 18",
        street: "Ajapi - Ferraz"
    },
    {
        id: 14,
        name: "Linha 19",
        street: "São Miguel"
    },
    {
        id: 15,
        name: "Linha 20",
        street: "Boa Vista - Centro"
    },
    {
        id: 16,
        name: "Linha 21",
        street: "Jardim Novo (Via Kennedy)"
    },
    {
        id: 17,
        name: "Linha 23",
        street: "Jardim Novo (Rodoviária)"
    },
    {
        id: 18,
        name: "Linha 24",
        street: "Jardim Novo (Inocop)"
    },
]

const linhasContainer = document.querySelector('.linhas-container');

const linhasHTML = linhas.map((linha) => `
    <div class="linha-box">
        <i class="bx bxs-bus"></i>
        <div class="line"></div>
        <div class="content">
            <h4 class="name">${linha.name}</h4>
            <span>${linha.street}</span>
        </div>
    </div>
`).join('');

linhasContainer.innerHTML = linhasHTML;
