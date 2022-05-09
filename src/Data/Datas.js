import doc from '../images/doc.PNG'
import React from 'react';
var Data = [
    {
        "id": 1,
        "photo": doc,
        "categorie": 'Calistenics',
        "nom": 'Seche du coprs pour un mois',
        "semaine": [
            {
                id: 1,
                titre: "Jours 1 à 5",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tout Commence Maintenant ! 🔥</h2>
                    <p>Ça y est, c'est le moment de te lancer ! La marche à suivre est simple :</p>
                    <ul>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>Met toi en tete ceci: Leve toi avec détermination et dors toi avec satisfaction!</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>L'objet de ce programme est de perdre du poids et de gagner du muscle ,de ce fait on doit travailler le corps entier ,il y'aura dans une semaine de 5 jours, 3 jours d'activités et 2 jours de repos.</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>Pour chaque jour du programme ,vous avez au moins 3 video à suivre pour chacune au moins <code style={{ fontWeight: 'bold', color: 'cornflowerblue', fontSize: 18 }}>8 minutes </code>. Si une video est présente deux fois à la suite, c'est parce qu'il faut la faire deux fois de suite.</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>Tu peux prendre <code style={{ fontWeight: 'bold', color: 'cornflowerblue', fontSize: 18 }}>1-2 minutes </code>de repos entre l'échauffement et la première routine, et <code style={{ fontWeight: 'bold', color: 'cornflowerblue', fontSize: 18 }}>5 minutes </code> entre deux routines. N'hésites pas à modifier ces temps en fonction de ton ressenti. Les durées totales indiquées pour les séances comprennent ces temps de repos ainsi que l'échauffement.</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>Les routines proposées lors <code style={{ fontWeight: 'bold', color: 'cornflowerblue', fontSize: 18 }}>des jour de repos</code> sont facultatives, cependant c'est le meilleur moment si jamais tu souhaites entraîner autre chose, comme ta Souplesse ou de la technique pour un sport/exercice particulier.</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>J'ai fait expré de mettre une video d'Abdo chaque jour du programme pour renforcer les muscles abdominals et les autres seront des exercices de cardios pour bruler suffisament de calories.</li>
                        <li style={{ textAlign: 'left', marginBottom: 10 }}>J'ajouterai bientos un programme de nuitrition pour accompagner ce programme ,mais en attendant<code style={{ fontWeight: 'bold', color: 'cornflowerblue', fontSize: 18 }}> buvez beaucoup d'eau et du thé vert</code>.</li>
                    </ul>

                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 1",
                        "dure": "37min",
                        'desc': "Cette séance travaille principalement les pecs et les abdominux.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": '1- Echauffement',
                                "desc": "L'échauffement est obligatoire avant de commencer. En plus de prévenir des blessures, il permet de faire monter le corps en température pour que les muscles puissent fonctionner dans de meilleures conditions, et de faire augmenter la fréquence cardiaque. ",
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": '2- Pectoraux x 2',
                                "desc": "Dans cette video nous allons cibler les pectoraux avec des differents exercices de pompes, je te propose de faire deux repetitions sur cette video ,mais ça depend de ta forme et de ta motivatioin.",
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": '3- Abdominaux x 2',
                                "desc": "Pour les abdos essaye de donner le maximum d'effort pout bien faire l'exercice ,car pas mal des gens font cette erreur de ne pas bien faire les exercices comme il faut et il risque des blessures,ou un mauvais resultat,repeter cette video deux fois ou plus s'il vous reste encore d'energie .",
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 2",
                        "dure": "20min",
                        'desc': "Dans cette séance normalement on devrait faire repos mais à notre maniere on va juste faire un peu de souplesse, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": '1- Souplesse',
                                "url": "https://www.youtube.com/embed/xvrWZk6ZekQ",
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 3",
                        "dure": "57min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": '1- Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": '2- Haut du cops X 2',
                                "url": "https://www.youtube.com/embed/aI9VbuedMLI",
                            },
                            {
                                "id": 3,
                                "titre": '3- Epaules X 2',
                                "url": "https://www.youtube.com/embed/n4fsXXfU5jY",
                            },


                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 4",
                        "dure": "45min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": '1- Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": '2- Cardio',
                                "url": "https://www.youtube.com/embed/7sO5tFIoB7k",
                            },
                            {
                                "id": 3,
                                "titre": '4- Abdominaux X 2',
                                "url": "https://www.youtube.com/embed/fNO30pPBZDo",
                            },

                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 5",
                        "dure": "20min",
                        'desc': "Dans cette séance normalement on devrait faire repos mais à notre maniere on va juste faire un peu de souplesse, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": '1- Souplesse',
                                "url": "https://www.youtube.com/embed/WjsQc9GUBW0?start=343",
                            },
                            {
                                "id": 2,
                                "titre": ' Ou ça pour aller plus loins',
                                "url": "https://www.youtube.com/embed/RN7zy6WWu24?start=343",
                            },
                        ]
                    },

                ],
            },
            {
                id: 2,
                titre: "Jours 6 à 10",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>


                </div>,
                "soustitres": [
                    {
                "id": 1,
                "nom": "JOUR 6",
                "dure": "54min",
                'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                "routines": [
                    {
                        "id": 1,
                        "titre": '1- Echauffement',
                        "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                    },
                    {
                        "id": 2,
                        "titre": '2- Abdominaux X 2',
                        "url": "https://www.youtube.com/embed/FyKwAWz9nV8",
                    },
                    {
                        "id": 3,
                        "titre": '3- Bas Du coprs X 2',
                        "url": "https://www.youtube.com/embed/G2NWfxVM8jg",
                    },

                ]
            },

                    {
                        "id": 2,
                        "nom": "JOUR 7",
                        "dure": "60min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux X2',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Cardio X2',
                                "url": "https://www.youtube.com/embed/D1fxXAJ2wQs",
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 8",
                        "dure": "1h05min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": '1- Souplesse',
                                "url": "https://www.youtube.com/embed/xvrWZk6ZekQ",
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 9",
                        "dure": "1h05min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Epaules ',
                                "url": "https://www.youtube.com/embed/1nTjEYqcWXs",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux X2',
                                "url": "https://www.youtube.com/embed/jWc0IiZH6zw",
                            },
                            {
                                "id": 4,
                                "titre": 'Cardio',
                                "url": "https://www.youtube.com/embed/QnGQbFk_MRk",
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 10",
                        "desc": "Cette dernière séance on va juste se reposé un peu pour laisser le coprs recuperer en faisant juste 20 minutes de souplesse",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Souplesse',
                                "url": "https://www.youtube.com/embed/NqVSG7Bmc24",
                            },
                          
                        ]
                    },

                ],
            },
            {
                id: 3,
                titre: "Jours 11 à 15",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>


                </div>,
            "soustitres": [
                {
                    "id": 1,
                    "nom": "JOUR 11",
                    "dure": "37min",
                    'desc': "Cette séance travaille principalement les pecs et les abdominux.",
                    "routines": [
                        {
                            "id": 1,
                            "titre": 'Echauffement',
                            "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                        },
                        {
                            "id": 2,
                            "titre": 'Bas du Coprs X2',
                            "url": "https://www.youtube.com/embed/q7rCeOa_m58",
                        },
                        {
                            "id": 3,
                            "titre": 'Abdominaux',
                            "url": "https://www.youtube.com/embed/XgI_p8bKg78",
                        },
                    ]
                },

                {
                    "id": 2,
                    "nom": "JOUR 12",
                    "dure": "20min",
                    'desc': "Dans cette séance normalement on devrait faire repos mais à notre maniere on va juste faire un peu de souplesse, tout en aidant à améliorer sa posture.",
                    "routines": [
                        {
                            "id": 1,
                            "titre": '1- Souplesse',
                            "url": "https://www.youtube.com/embed/xvrWZk6ZekQ",
                        },
                    ]
                },

                {
                    "id": 3,
                    "nom": "JOUR 13",
                    "dure": "57min",
                    'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                    "routines": [
                        {
                            "id": 1,
                            "titre": '1- Echauffement',
                            "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                        },
                        {
                            "id": 2,
                            "titre": '2- Haut du cops X 2',
                            "url": "https://www.youtube.com/embed/aI9VbuedMLI",
                        },
                        {
                            "id": 3,
                            "titre": '3- Epaules X 2',
                            "url": "https://www.youtube.com/embed/n4fsXXfU5jY",
                        },


                    ]
                },

                {
                    "id": 4,
                    "nom": "JOUR 14",
                    "dure": "45min",
                    'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                    "routines": [
                        {
                            "id": 1,
                            "titre": '1- Echauffement',
                            "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                        },
                        {
                            "id": 2,
                            "titre": '2- Cardio',
                            "url": "https://www.youtube.com/embed/7sO5tFIoB7k",
                        },
                        {
                            "id": 3,
                            "titre": '4- Abdominaux X 2',
                            "url": "https://www.youtube.com/embed/fNO30pPBZDo",
                        },

                    ]
                },

                {
                    "id": 5,
                    "nom": "JOUR 15",
                    "dure": "20min",
                    'desc': "Dans cette séance normalement on devrait faire repos mais à notre maniere on va juste faire un peu de souplesse, tout en aidant à améliorer sa posture.",
                    "routines": [
                        {
                            "id": 1,
                            "titre": '1- Souplesse',
                            "url": "https://www.youtube.com/embed/WjsQc9GUBW0?start=343",
                        },
                        {
                            "id": 2,
                            "titre": ' Ou ça pour aller plus loins',
                            "url": "https://www.youtube.com/embed/RN7zy6WWu24?start=343",
                        },
                    ]
                },

            ],
            },
            {
                id: 4,
                titre: "Jours 16 à 20",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>


                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 16",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 17",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 18",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 19",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 20",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
            {
                id: 5,
                titre: "Jours 21 à 25",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2>Tiens bon ,on y est ! 🔥</h2>
                    <p>tu est si pret du bute</p>


                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 21",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 22",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 23",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 24",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 25",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
            {
                id: 6,
                titre: "Jours 26 à 30",
                "photo": doc,
                "intro": <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start' }}>
                    <h2 >Tiens bon ,on y est ! <span>🔥</span></h2>
                    <p>tu est si pret du bute</p>
                </div>,
                "soustitres": [
                    {
                        "id": 1,
                        "nom": "JOUR 26",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 2,
                        "nom": "JOUR 27",
                        "dure": "1h20",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 3,
                        "nom": "JOUR 28",
                        "dure": "50min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },

                        ]
                    },

                    {
                        "id": 4,
                        "nom": "JOUR 29",
                        "dure": "30min",
                        'desc': "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                    {
                        "id": 5,
                        "nom": "JOUR 30",
                        "desc": "Cette dernière séance travaille principalement les épaules et le dos, tout en aidant à améliorer sa posture.",
                        "routines": [
                            {
                                "id": 1,
                                "titre": 'Echauffement',
                                "url": 'https://www.youtube.com/embed/pcgzgl8b5C8',
                            },
                            {
                                "id": 2,
                                "titre": 'Pectoraux',
                                "url": "https://www.youtube.com/embed/2m6FlDwaIhc",
                            },
                            {
                                "id": 3,
                                "titre": 'Abdominaux',
                                "url": 'https://www.youtube.com/embed/3eQa7C6D4XU',
                            },
                        ]
                    },

                ],
            },
        ]

    }


]

export default Data;