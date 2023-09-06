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
        street: "Arco íris - Mãe Preta",

        locales: [
            {
                name: "Arco Íris / Mãe Preta para estação",
                hours: {
                    segundaSexta: ["05:00", "05:20", "06:10", "06:30", "07:10", "07:35", "08:15", "08:45", "09:50", "10:55", "12:00", "13:10", "14:15", "15:20", "16:25", "17:30", "18:05", "18:40", "19:55", "21:15", "22:35"],
                    sabado: ["05:20", "06:30", "07:35", "08:45", "09:50", "10:55", "12:00", "13:10", "14:15", "15:20", "16:30", "17:50", "19:10", "20:30", "21:50"],
                    domingoFeriado: ["06:50", "08:10", "09:30", "11:50", "13:10", "15:30", "16:50", "18:10", "19:30", "21:50"]
                }
            },
            {
                name: "Estação para Arco Íris / Mãe Preta",
                hours: {
                    segundaSexta: ["05:35", "05:55", "06:40", "07:00", "07:45", "08:10", "09:15", "10:20", "11:25", "12:35", "13:40", "14:45", "15:50", "16:55", "17:30", "18:05", "18:40", "19:15", "20:35", "21:55", "23:15"],
                    sabado: ["05:55", "07:00", "08:10", "09:15", "10:20", "11:25", "12:35", "13:40", "14:45", "15:50", "17:10", "18:30", "19:50", "21:10", "22:30"],
                    domingoFeriado: ["07:30", "08:50", "11:10", "12:30", "14:50", "16:10", "17:30", "18:50", "21:10", "22:30"]
                }
            }
        ]
    },
    {
        id: 3,
        name: "Linha 06",
        street: "Cervezão",

        locales: [
            {
                name: "Cervezão para Estação",
                hours: {
                    segundaSexta: ["05:20", "05:50", "06:30", "07:00", "07:30", "08:10", "08:30", "09:20", "10:20", "11:20", "12:30", "13:30", "14:30", "15:40", "16:40", "17:10", "17:40", "18:10", "18:50", "19:50", "20:50", "21:50", "22:50"],

                    sabado: ["05:20", "06:20", "07:30", "08:30", "09:40", "11:40", "12:40", "13:50", "15:50", "17:00", "18:00", "19:10", "20:10", "22:00"],

                    domingoFeriado: ["05:20", "07:30", "09:40", "11:50", "14:00", "16:10", "18:20", "20:30", "22:40"]
                }
            },
            {
                name: "Estação para Arco Íris / Mãe Preta",
                hours: {
                    segundaSexta: ["05:50", "06:20", "07:30", "08:00", "08:40", "09:50", "10:50", "11:50", "13:00", "14:00", "15:00", "16:10", "16:30", "17:10", "17:40", "18:10", "18:40", "19:20", "20:20", "21:20", "22:20", "22:20", "23:30"],

                    sabado: ["05:50", "06:50", "08:00", "09:00", "11:10", "12:10", "13:10", "15:20", "16:20", "17:30", "18:30", "19:40", "21:35", "22:30"],

                    domingoFeriado: ["07:00", "09:10", "11:20", "13:30", "15:40", "17:50", "20:00", "22:10", "22:40"]
                }
            }
        ]
    },
    {
        id: 4,
        name: "Linha 07",
        street: "Circular 01",

        locales: [
            {
                name: "Boa Vista para estação",
                hours: {
                    segundaSexta: ["05:00", "05:35", "06:10", "06:45", "07:20", "07:55", "08:30", "09:40", "10:50", "12:00", "13:10", "14:20", "15:30", "16:40", "17:15", "17:50", "18:25", "19:00", "20:10", "21:20", "22:30"],

                    sabadoDomingoFeriado: ["05:00", "06:10", "07:20", "08:30", "09:40", "11:50", "13:00", "14:10", "15:20", "16:30", "17:40", "18:50", "20:00", "22:10"],
                }
            },
            {
                name: "Estação para Boa Vista",
                hours: {
                    segundaSexta: ["05:40", "06:15", "06:50", "07:25", "08:00", "09:10", "10:20", "11:30", "12:40", "13:50", "15:00", "16:10", "16:45", "17:20", "17:55", "18:30", "19:05", "19:40", "20:50", "22:00", "23:10"],

                    sabadoDomingoFeriado: ["05:40", "06:50", "08:00", "09:10", "11:20", "12:30", "13:40", "14:50", "16:00", "17:10", "18:20", "19:30", "21:40", "22:50"],
                }
            }
        ]
    },
    {
        id: 5,
        name: "Linha 08",
        street: "Circular 02",

        locales: [
            {
                name: "Boa Vista para estação",
                hours: {
                    segundaSexta: ["04:55", "06:10", "07:25", "08:40", "09:55", "11:10", "12:25", "13:40", "14:55", "16:10", "17:25", "18:40", "19:55", "21:10", "22:25"],

                    sabadoDomingoFeriado: ["06:10", "07:25", "08:40", "09:55", "12:15", "13:35", "14:55", "16:15", "17:35", "18:55", "21:15"],
                }
            },
            {
                name: "Estação para Boa Vista",
                hours: {
                    segundaSexta: ["05:35", "06:50", "08:05", "09:20", "10:35", "11:50", "13:05", "14:20", "15:35", "16:50", "18:05", "19:20", "20:35", "21:50", "23:05"],

                    sabadoDomingoFeriado: ["06:50", "08:05", "09:20", "11:35", "12:55", "14:15", "15:35", "16:55", "18:15", "20:35", "21:55"],
                }
            }
        ]
    },
    {
        id: 6,
        name: "Linha 09",
        street: "Paineiras - Santa Eliza",

        locales: [
            {
                name: "Estação para Paineiras/S. Eliza",
                hours: {
                    segundaSexta: ["05:35", "06:10", "06:40", "07:15", "07:45", "08:50", "09:55", "11:00", "12:05", "13:10", "14:15", "15:20", "16:25", "16:55", "17:30", "18:00", "18:35", "19:05", "19:40", "20:50", "22:00", "23:10"],

                    sabado: ["05:35", "06:40", "07:45", "08:50", "09:55", "11:00", "12:05", "13:10", "14:15", "15:20", "16:25", "17:40", "18:55", "20:10", "21:20", "22:30"],

                    domingoFeriado: ["06:40", "07:50", "09:00", "11:10", "12:20", "13:30", "15:40", "16:50", "18:00", "19:10", "21:20", "22:30"]
                }
            },
            {
                name: "Paineiras/S. Eliza para estação",
                hours: {
                    segundaSexta: ["05:00", "05:35", "06:05", "06:40", "07:10", "07:45", "08:15", "09:20", "10:25", "11:30", "12:35", "13:40", "14:45", "15:50", "16:55", "17:25", "18:00", "18:30", "19:05", "20:15", "21:25", "22:35"],

                    sabado: ["05:00", "06:05", "07:10", "08:15", "09:20", "10:25", "11:30", "12:35", "13:40", "14:45", "15:50", "17:00", "18:15", "19:30", "20:45", "21:55"],

                    domingoFeriado: ["06:05", "07:15", "08:25", "09:35", "11:45", "12:55", "14:05", "16:15", "17:25", "18:35", "19:45", "21:55"]
                }
            }
        ]
    },
    {
        id: 7,
        name: "Linha 10",
        street: "Copacabana - Vila Paulista",

        locales: [
            {
                name: "Copacabana para estação",
                hours: {
                    segundaSexta: ["06:05", "07:15", "08:35", "09:45", "12:05", "13:15", "15:20", "16:30", "17:55", "19:05", "20:15"],

                    sabado: ["06:45", "08:50", "11:45", "13:50", "15:45", "17:40", "22:00"],

                    domingoFeriado: ["08:05", "13:05", "18:05"]
                }
            },
            {
                name: "Estação para Copacabana",
                hours: {
                    segundaSexta: ["06:55", "08:15", "09:25", "11:45", "12:55", "15:00", "16:10", "17:35", "18:45", "19:55"],

                    sabado: ["06:25", "08:30", "11:25", "13:30", "15:25", "17:20", "21:40"],

                    domingoFeriado: ["07:45", "12:45", "17:45", "19:50"]
                }
            },
            {
                name: "Estação para Vila Paulista",
                hours: {
                    segundaSexta: ["06:25", "07:35", "08:55", "10:05", "12:25", "14:30", "15:40", "16:50", "18:15", "19:25", "20:35"],

                    sabado: ["07:05", "10:10", "12:05", "14:00", "16:05", "18:00", "20:25", "22:20"],

                    domingoFeriado: ["08:25", "11:30", "13:25", "16:30", "18:25"]
                }
            },
            {
                name: "Vila Paulista para estação",
                hours: {
                    segundaSexta: ["06:40", "07:50", "09:10", "10:20", "12:40", "14:45", "15:55", "17:05", "18:30", "19:40"],

                    sabado: ["07:20", "10:25", "12:20", "14:15", "16:20", "18:15", "20:40", "22:35"],

                    domingoFeriado: ["08:40", "11:45", "13:40", "16:45", "18:40"]
                }
            },
            {
                name: "Bela Vista para estação",
                hours: {
                    sabado: ["06:05", "08:10", "11:05", "13:10", "15:05", "17:00", "19:05", "21:20"],

                    domingoFeriado: ["07:25", "12:25", "17:25", "19:30"]
                }
            },
            {
                name: "Estação para Bela Vista",
                hours: {
                    sabado: ["07:45", "10:40", "12:45", "14:40", "16:35", "18:40", "20:55", "22:50"],

                    domingoFeriado: ["12:00", "17:00", "19:05"]
                }
            }
        ]
    },
    {
        id: 8,
        name: "Linha 11",
        street: "Vila Olinda",

        locales: [
            {
                name: "Estação para Vila Olinda",
                hours: {
                    segundaSexta: ["06:00", "06:55", "07:50", "08:45", "09:40", "10:35", "11:30", "12:25", "13:20", "14:15", "15:10", "16:05", "17:00", "17:55", "18:50", "19:40", "20:50", "22:00", "23:10"],

                    sabado: ["06:00", "06:55", "07:50", "08:45", "09:40", "10:35", "11:30", "12:25", "13:20", "14:15", "15:10", "16:25", "17:40", "18:55", "20:10", "21:20", "22:30"],

                    domingoFeriado: ["06:40", "07:50", "09:00", "11:10", "12:20", "13:30", "15:40", "16:50", "18:00", "19:10", "21:20", "22:30"]
                }
            },
            {
                name: "Vila Olinda para estação",
                hours: {
                    segundaSexta: ["05:30", "06:25", "07:20", "08:15", "09:10", "10:05", "11:00", "11:55", "12:50", "13:45", "14:40", "15:35", "16:30", "17:25", "18:20", "20:15", "21:25", "22:35"],

                    sabado: ["05:30", "06:25", "07:20", "08:15", "09:10", "10:05", "11:00", "11:55", "12:50", "13:45", "14:40", "17:00", "18:15", "19:30", "20:45", "21:55"],

                    domingoFeriado: ["06:05", "07:15", "08:25", "09:35", "11:45", "12:55", "14:05", "16:15", "17:25", "18:35", "19:45", "21:55"]
                }
            }
        ]
    },
    {
        id: 9,
        name: "Linha 12",
        street: "Palmeiras",

        locales: [
            {
                name: "Estação para Palmeiras",
                hours: {
                    segundaSexta: ["05:40", "06:15", "06:50", "07:25", "08:00", "09:10", "10:20", "11:30", "12:40", "13:50", "15:00", "16:10", "16:35", "17:20", "17:45", "18:30", "18:55", "19:40", "20:50", "22:00", "23:10"],

                    sabado: ["06:50", "08:00", "10:10", "11:20", "12:30", "13:40", "15:50", "17:00", "18:10", "19:20", "21:30", "22:40"],

                    domingoFeriado: ["06:50", "09:00", "11:10", "13:20", "15:30", "17:40", "19:50", "22:00"]
                }
            },
            {
                name: "Palmeiras para estação",
                hours: {
                    segundaSexta: ["05:05", "05:40", "06:15", "06:50", "07:25", "08:00", "08:35", "09:45", "10:55", "12:05", "13:15", "14:25", "15:35", "16:45", "17:10", "17:55", "18:20", "19:05", "20:15", "21:25", "22:35"],

                    sabado: ["06:15", "07:25", "08:35", "10:45", "11:55", "13:05", "14:15", "16:25", "17:35", "18:45", "19:55", "22:05"],

                    domingoFeriado: ["05:15", "07:25", "09:35", "11:45", "13:55", "16:05", "18:15", "20:25", "22:35"]
                }
            }
        ]
    },
    {
        id: 10,
        name: "Linha 14",
        street: "Bom Sucesso",

        locales: [
            {
                name: "Bom Sucesso direto para estação",
                hours: {
                    segundaSexta: ["06:15", "07:25", "12:00", "13:10", "17:55"],
                }
            },
            {
                name: "Bom Sucesso para estação - Via Av. 29",
                hours: {
                    segundaSexta: ["05:30", "06:40", "07:15", "07:50", "08:25", "09:00", "10:10", "11:20", "12:30", "13:40", "14:50", "16:00", "17:10", "17:45", "18:20", "19:25", "20:30", "21:35", "22:40"],

                    sabado: ["05:30", "06:40", "07:50", "09:00", "11:10", "12:20", "13:30", "15:40", "16:50", "18:00", "19:05", "20:10", "22:15"],

                    domingoFeriado: ["06:25", "08:35", "10:45", "12:55", "15:05", "17:15", "19:25", "21:35"]
                }
            },
            {
                name: "Estação para Bom Sucesso",
                hours: {
                    segundaSexta: ["06:05", "07:15", "07:50", "08:25", "09:35", "10:45", "11:55", "13:05", "14:15", "15:25", "16:35", "17:10", "17:45", "18:20", "18:55", "20:00", "21:05", "22:10", "23:15"],

                    sabado: ["06:05", "07:15", "08:25", "10:35", "11:45", "12:55", "15:05", "16:15", "17:25", "18:35", "19:40", "21:45", "22:50"],

                    domingoFeriado: ["05:50", "08:00", "10:10", "12:20", "14:30", "16:40", "18:50", "21:00", "23:10"]
                }
            },
            {
                name: "Estação para Bom Sucesso direto",
                hours: {
                    segundaSexta: ["06:50", "11:25", "12:35", "17:25", "18:25"],
                }
            }
        ]
    },
    {
        id: 11,
        name: "Linha 15",
        street: "Assistência",

        locales: [
            {
                name: "Assistência para estação",
                hours: {
                    segundaSexta: ["05:30", "06:25", "07:25", "08:30", "09:35", "10:50", "11:50", "12:50", "13:50", "14:50", "15:50", "16:50", "17:50", "18:50", "19:50", "21:50", "22:50"],

                    sabado: ["05:30", "06:25", "07:25", "08:30", "10:50", "11:50", "12:50", "13:50", "15:50", "16:50", "17:50", "18:50", "19:50", "21:50"],

                    domingoFeriado: ["05:30", "06:25", "07:25", "08:30", "10:50", "11:50", "12:50", "13:50", "15:50", "16:50", "17:50", "18:50", "20:50"]
                }
            },
            {
                name: "Estação para Assistência",
                hours: {
                    segundaSexta: ["05:05", "06:00", "06:55", "08:00", "09:00", "10:15", "11:25", "12:20", "13:20", "14:20", "15:20", "16:20", "17:20", "18:20", "19:20", "21:20", "22:20", "23:20"],

                    sabado: ["05:05", "06:00", "06:55", "08:00", "10:00", "11:15", "12:25", "13:20", "15:20", "16:20", "17:20", "18:20", "19:20", "20:20", "21:20", "22:20"],

                    domingoFeriado: ["06:00", "06:55", "08:00", "10:00", "11:15", "12:25", "13:20", "15:20", "16:20", "17:20", "18:20", "20:20", "21:20"]
                }
            }
        ]
    },
    {
        id: 12,
        name: "Linha 16",
        street: "Centenário",

        locales: [
            {
                name: "Centenário para estação",
                hours: {
                    segundaSexta: ["06:15", "07:15", "08:15", "09:15", "10:15", "11:15", "12:15", "13:15", "14:15", "15:15", "16:15", "17:15", "18:15", "19:15", "20:15", "21:15", "22:15"],

                    sabado: ["06:15", "07:15", "08:15", "09:15", "11:15", "12:15", "13:15", "14:15", "16:15", "17:15", "18:15", "19:15", "20:15", "22:15"],

                    domingoFeriado: ["06:20", "08:30", "10:40", "12:50", "15:00", "17:10", "19:20", "21:30"]
                }
            },
            {
                name: "Estação para Centenário",
                hours: {
                    segundaSexta: ["06:45", "07:45", "08:45", "09:45", "10:45", "11:45", "12:45", "13:45", "14:45", "15:45", "16:45", "17:45", "18:45", "19:45", "20:45", "21:45", "22:45"],

                    sabado: ["06:45", "07:45", "08:45", "10:45", "11:45", "12:45", "13:45", "15:45", "16:45", "17:45", "18:45", "19:45", "21:45", "22:45"],

                    domingoFeriado: ["05:50", "08:00", "10:10", "12:20", "14:30", "14:40", "18:50", "21:00", "23:10"]
                }
            }
        ]
    },
    {
        id: 13,
        name: "Linha 18",
        street: "Ajapi - Ferraz",

        locales: [
            {
                name: "Ajapi para estação",
                hours: {
                    segundaSexta: ["06:05", "06:45", "07:15", "07:25", "08:25", "09:25", "11:25", "12:20", "13:35", "14:05", "15:25", "16:00", "16:45", "17:50", "18:35", "20:35", "22:30", "23:00"],

                    sabadoDomingoFeriado: ["06:00", "07:40", "08:50", "11:30", "13:10", "15:50", "17:30", "19:10", "21:50"],

                }
            },
            {
                name: "Ajapi para Ferraz",
                hours: {
                    segundaSexta: ["06:45", "07:55", "08:50", "10:50", "11:35", "13:00", "13:35", "14:55", "17:20", "18:05", "19:10", "20:00", "22:00", "22:30", "23:40"],

                    sabadoDomingoFeriado: ["07:10", "11:00", "12:40", "15:20", "17:00", "18:40", "21:20", "23:00"],
                }
            },
            {
                name: "Estação para Ajapi",
                hours: {
                    segundaSexta: ["05:55", "06:10", "06:50", "07:20", "08:10", "10:10", "11:00", "12:15", "13:00", "14:20", "15:20", "16:05", "16:40", "17:25", "18:30", "19:20", "21:15", "21:55", "23:10"],

                    sabadoDomingoFeriado: ["06:35", "08:15", "10:25", "12:05", "14:45", "16:25", "18:05", "20:45", "22:25"],
                }
            },
            {
                name: "Ferraz para Ajapi",
                hours: {
                    segundaSexta: ["05:45", "07:00", "08:10", "09:10", "11:10", "12:05", "13:15", "13:50", "15:10", "17:35", "18:20", "20:20", "22:15", "22:45"],

                    sabadoDomingoFeriado: ["05:45", "07:25", "11:15", "12:55", "15:35", "17:15", "18:55", "21:35"],
                }
            }
        ]
    },
    {
        id: 14,
        name: "Linha 19",
        street: "São Miguel",

        locales: [
            {
                name: "Estação para São Miguel",
                hours: {
                    segundaSexta: ["05:30", "06:40", "07:50", "09:00", "10:10", "11:20", "12:30", "12:40", "13:40", "14:50", "16:00", "17:15", "18:30", "18:35", "19:15", "20:35", "21:55", "23:15"],

                    sabado: ["05:30", "06:40", "07:50", "09:00", "10:10", "11:20", "12:30", "13:40", "14:50", "15:50", "17:10", "18:30", "19:50", "21:10", "22:30"],

                    domingoFeriado: ["07:30", "08:50", "11:10", "12:30", "14:50", "16:10", "17:30", "18:50", "21:10", "22:30"]

                }
            },
            {
                name: "São Miguel para estação",
                hours: {
                    segundaSexta: ["04:50", "05:20", "06:00", "06:10", "07:10", "08:20", "09:30", "10:40", "11:35", "11:50", "13:00", "14:10", "15:20", "16:30", "17:45", "19:55", "21:15", "22:35"],

                    sabado: ["04:50", "06:00", "07:10", "08:20", "09:30", "10:40", "11:50", "13:00", "14:10", "16:30", "17:50", "19:10", "20:30", "21:50"],

                    domingoFeriado: ["06:50", "08:10", "09:30", "11:50", "13:10", "15:30", "16:50", "18:10", "19:30", "21:50"],
                }
            }
        ]
    },
    {
        id: 15,
        name: "Linha 20",
        street: "Boa Vista - Centro",

        locales: [
            {
                name: "Boa Vista para estação",
                hours: {
                    segundaSexta: ["06:00", "07:00", "08:05", "09:05", "10:05", "11:10", "12:10", "13:10", "14:15", "15:15", "16:15", "17:20", "18:20", "19:20"],
                }
            },
            {
                name: "Estação para Boa Vista",
                hours: {
                    segundaSexta: ["06:30", "07:30", "08:35", "09:35", "10:35", "11:40", "12:40", "13:40", "14:45", "15:45", "16:45", "17:50", "18:50", "19:50"],
                }
            }
        ]
    },
    {
        id: 16,
        name: "Linha 21",
        street: "Jardim Novo (Via Kennedy)",

        locales: [
            {
                name: "Estação para Jardim Novo - Via Kennedy",
                hours: {
                    segundaSexta: ["06:40", "08:00", "09:20", "10:40", "12:00", "13:20", "14:40", "16:00", "17:20", "18:40", "20:00"],
                }
            },
            {
                name: "Jardim Novo - Via Kennedy para estação",
                hours: {
                    segundaSexta: ["06:00", "07:20", "08:40", "10:00", "11:20", "12:40", "14:00", "15:20", "16:40", "18:00", "19:20"],
                }
            }
        ]
    },
    {
        id: 17,
        name: "Linha 23",
        street: "Jardim Novo (Rodoviária)",

        locales: [
            {
                name: "Estação para Jardim Novo",
                hours: {
                    segundaSexta: ["05:40", "06:10", "06:40", "07:05", "07:35", "08:05", "09:00", "09:30", "10:25", "10:55", "11:20", "11:50", "12:20", "13:15", "13:45", "14:40", "15:10", "15:35", "16:05", "16:35", "17:00", "17:30", "18:00", "18:25", "18:55", "19:25", "20:20", "21:45", "22:30", "23:10"],

                    sabado: ["06:10", "07:05", "07:35", "08:30", "09:00", "09:55", "10:25", "11:20", "11:50", "12:45", "13:15", "14:10", "14:40", "15:35", "16:05", "17:30", "18:55", "20:20", "21:45", "23:10"],

                    domingoFeriado: ["06:10", "07:35", "10:00", "11:25", "12:50", "15:15", "16:40", "18:05",
                    "19:30", "21:55", "23:20"]

                }
            },
            {
                name: "Jardim Novo para estação",
                hours: {
                    segundaSexta: [  "05:00", "05:30", "06:00", "06:25", "06:55", "07:25", "07:50", "08:20", "08:50", "09:45", "10:15", "11:10", "11:40", "12:05", "12:35", "13:05", "14:00", "14:30", "15:25", "15:55", "16:20", "16:50", "17:20", "17:45", "18:15", "18:45", "19:40", "21:05", "22:30"],

                    sabado: ["05:30", "06:25", "06:55", "07:50", "08:20", "09:15", "09:45", "10:40",
                    "11:10", "12:05", "12:35", "13:30", "14:00", "14:55", "15:25", "16:50",
                    "18:15", "19:40", "21:05", "22:30"],

                    domingoFeriado: ["05:30", "06:55", "08:20", "10:45", "12:10", "13:35", "16:00", "17:25",
                    "18:50", "20:15", "22:40"],
                }
            }
        ]
    },
    {
        id: 18,
        name: "Linha 24",
        street: "Jardim Novo (Inocop)",

        locales: [
            {
                name: "Estação para Jardim Novo",
                hours: {
                    segundaSexta: ["06:00", "06:30", "07:00", "07:25", "07:55", "08:25", "09:20", "09:50", "10:45", "11:15", "11:40", "12:10", "12:40", "13:35", "14:05", "15:00", "15:30", "15:55", "16:25", "16:55", "17:25", "17:50", "18:20", "18:45", "19:15", "19:45", "20:15", "20:45"],

                    sabado: ["06:45", "08:10", "09:35", "11:00"],
                }
            },
            {
                name: "Jardim Novo para estação",
                hours: {
                    segundaSexta: ["05:15", "05:45", "06:15", "06:40", "07:10", "07:40", "08:05", "08:35", "09:05", "10:00", "10:30", "11:25", "11:55", "12:20", "12:50", "13:20", "14:15", "14:45", "15:40", "16:10", "16:35", "17:05", "17:35", "18:00", "18:30", "19:00", "19:30", "20:00"],

                    sabado: ["06:00", "07:25", "08:50", "10:15"],
                }
            }
        ]
    },
]