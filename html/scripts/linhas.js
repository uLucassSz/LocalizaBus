const linhas = [
    {
        id: 1,
        name: "Linha 01",
        street: "Bela Vista - Rodoviária",

        locales: [
            {
                name: "Bela Vista para estação",
                hours: {
                    segundaSexta: ["05:35", "06:55", "08:15", "09:35", "10:50", "12:05", "13:25", "14:45", "16:00", "17:20", "18:40", "20:00", "22:40"],
                    sabado: ["06:05", "08:10", "11:05", "13:10", "15:05", "17:00", "19:05", "21:20"],
                    domingoFeriado: ["07:25", "12:25", "17:25", "19:30"]
                }
            },
            {
                name: "Estação para Bela Vista",
                hours: {
                    segundaSexta: ["06:30", "07:50", "09:10", "10:25", "11:40", "13:00", "14:20", "15:35", "16:55", "18:15", "19:35", "22:20", "23:25"],
                    sabado: ["07:45", "10:40", "12:45", "14:40", "16:35", "18:40", "20:55", "22:50"],
                    domingoFeriado: ["12:00", "17:00", "19:05"]
                }
            },
            {
                name: "Estação para rodoviária",
                hours: {
                    segundaSexta: ["06:00", "07:20", "08:40", "09:55", "11:10", "12:30", "13:50", "15:05", "16:25", "17:45", "19:05", "21:50", "23:00"]
                }
            },
            {
                name: "Rodoviária para estação",
                hours: {
                    segundaSexta: ["06:15", "07:35", "08:55", "10:10", "11:25", "12:45", "14:05", "15:20", "16:40", "18:00", "19:20", "22:05", "23:10"]
                }
            },
            {
                name: "Copacabana para estação",
                hours: {
                    sabado: ["06:45", "08:50", "11:45", "13:50", "15:45", "17:40", "22:00"],
                    domingoFeriado: ["08:05", "13:05", "18:05"]
                }
            },
            {
                name: "Estação para Copacabana",
                hours: {
                    sabado: ["06:25", "08:30", "11:25", "13:30", "15:25", "17:20", "21:40"],
                    domingoFeriado: ["07:45", "12:45", "19:50"]
                }
            },
            {
                name: "Estação para Vila Paulista",
                hours: {
                    sabado: ["07:05", "10:10", "12:05", "14:00", "16:05", "18:00", "20:25", "22:00"],
                    domingoFeriado: ["08:25", "11:30", "13:25", "16:30", "18:25"]
                }
            },
            {
                name: "Vila Paulista para Estação",
                hours: {
                    sabado: ["07:20", "10:25", "12:20", "14:15", "16:20", "18:15", "20:40", "22:35"],
                    domingoFeriado: ["08:40", "11:45", "13:40", "16:45", "18:40"]
                }
            }
        ]
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
