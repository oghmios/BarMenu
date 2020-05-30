new Vue({
    el: '#app',
    data: {
        isOpen: false,
        view: 'Desayunos',
        menu: [{ //Desayunos
                name: 'Desayunos',
                id: 1,
                list: [{
                        name: 'Desayuno 1/2 Tostada',
                        mesa: '2,25 €',
                        barra: '2,00 €',
                        terraza: '2,40 €'
                    },
                    {
                        name: 'Desayuno Tostada',
                        mesa: '3,00 €',
                        barra: '2,80 €',
                        terraza: '3,25 €'
                    },
                    {
                        name: 'Desayuno Bollería',
                        mesa: '2,75 €',
                        barra: '2,60 €',
                        terraza: '3,00 €'
                    },
                    {
                        name: 'Desayuno 1/2 Tostada Con...',
                        mesa: '3,50 €',
                        barra: '3,50 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Desayuno 1/2 Tostada Zumo',
                        mesa: '3,50 €',
                        barra: '3,30 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Desayuno Bollería Zumo',
                        mesa: '3,90 €',
                        barra: '3,80 €',
                        terraza: '4,00 €'
                    },
                    {
                        name: 'Desayuno Tostada Zumo',
                        mesa: '4,60 €',
                        barra: '4,50 €',
                        terraza: '4,75 €'
                    },
                    {
                        name: 'Desayuno 1/2 Bocadillo',
                        mesa: '3,35 €',
                        barra: '3,25 €',
                        terraza: '3,50 €'
                    },
                    {
                        name: 'Zumo Y 1/2 Tostada',
                        mesa: '3,40 €',
                        barra: '3,25 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Zumo Y Pieza Bollería',
                        mesa: '3,35 €',
                        barra: '3,25 €',
                        terraza: '3,25 €'
                    },
                    {
                        name: 'Zumo Y Tostada Entera',
                        mesa: '4,00 €',
                        barra: '3,90 €',
                        terraza: '4,25 €'
                    },
                    {
                        name: 'Zumo 1/2 Tostada Con',
                        mesa: '4,60 €',
                        barra: '4,50 €',
                        terraza: '4,75 €'
                    },
                    {
                        name: '1/2 Tostada',
                        mesa: '1,35 €',
                        barra: '1,25 €',
                        terraza: '1,50 €'
                    },
                    {
                        name: 'Tostada Completa',
                        mesa: '2,00 €',
                        barra: '1,75 €',
                        terraza: '2,00 €'
                    },
                    {
                        name: 'Pieza Bollería',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,75 €'
                    },
                    {
                        name: 'Zumito 1/2 Tostada',
                        mesa: '3,10 €',
                        barra: '2,75 €',
                        terraza: '3,25 €'
                    },
                    {
                        name: 'Mantequilla Unidad',
                        mesa: '0,30 €',
                        barra: '0,25 €',
                        terraza: '0,30 €'
                    },
                    {
                        name: 'Mermelada Unidad',
                        mesa: '0,40 €',
                        barra: '0,30 €',
                        terraza: '0,40 €'
                    },
                    {
                        name: 'Desay. Montadito',
                        mesa: '2,65 €',
                        barra: '2,50 €',
                        terraza: '3,00 €'
                    },
                    {
                        name: 'Des. Bolleria Peq.',
                        mesa: '2,35 €',
                        barra: '2,25 €',
                        terraza: '2,40 €'
                    },
                    {
                        name: 'Desayuno Sandwich Mixto',
                        mesa: '4,30 €',
                        barra: '4,20 €',
                        terraza: '4,50 €'
                    },
                ]
            },
            {
                name: 'Sandwiches y Bocadillos',
                id: 2,
                list: [{
                        name: 'Sandwich Mixto',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,35 €',
                        barra: '3,25 €',
                        terraza: '3,50 €'
                    },
                    {
                        name: 'Sandwich Gadea',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,70 €',
                        barra: '3,60 €',
                        terraza: '3,85 €'
                    },
                    {
                        name: 'Sandwich Especial',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,60 €',
                        barra: '3,50 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Sandwich Costa',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,60 €',
                        barra: '3,50 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Sandwich Ibérico',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,75 €',
                        barra: '3,60 €',
                        terraza: '3,85 €'
                    },
                    {
                        name: 'Sandwich Cool',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,60 €',
                        barra: '3,50 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Croissant Mixto',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,45 €',
                        barra: '3,35 €',
                        terraza: '3,60 €'
                    },
                    {
                        name: 'Bocadillo Jamón',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,60 €',
                        barra: '3,50 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Bocadillo Queso',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,60 €',
                        barra: '3,50 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Bocadillo Tortilla',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,40 €',
                        barra: '3,30 €',
                        terraza: '3,55 €'
                    },
                    {
                        name: 'Bocadillo Lomo Adobado',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,85 €',
                        barra: '3,75 €',
                        terraza: '4,00 €'
                    },
                    {
                        name: 'Bocadillo Longaniza',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,45 €',
                        barra: '3,05 €',
                        terraza: '3,60 €'
                    },
                    {
                        name: 'Bocadillo Salmón',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,60 €',
                        barra: '3,50 €',
                        terraza: '3,75 €'
                    },
                    {
                        name: 'Bocadillo Jamón York Y Queso',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,80 €',
                        barra: '3,70 €',
                        terraza: '3,95 €'
                    },
                    {
                        name: 'Bocadillo Anchoas',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,50 €',
                        barra: '3,40 €',
                        terraza: '3,60 €'
                    },
                    {
                        name: 'Bocadillo Atún',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,50 €',
                        barra: '3,40 €',
                        terraza: '3,60 €'
                    },
                    {
                        name: 'Bocadillo Queso Fresco',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,40 €',
                        barra: '3,30 €',
                        terraza: '3,50 €'
                    },
                    {
                        name: 'Bocadillo Sobrasada',
                        description: 'Jamón york y queso tostado',
                        mesa: '3,55 €',
                        barra: '3,45 €',
                        terraza: '3,65 €'
                    },
                    {
                        name: '1/2 Bocadillo',
                        description: 'Jamón york y queso tostado',
                        mesa: '2,10 €',
                        barra: '2,00 €',
                        terraza: '2,25 €'
                    },
                    {
                        name: '1/2 Bocadillo Lomo Adobado',
                        description: 'Jamón york y queso tostado',
                        mesa: '2,35 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Montadito',
                        description: 'Jamón york y queso tostado',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,70 €'
                    },
                    {
                        name: 'Ingrediente Extra',
                        description: 'Jamón york y queso tostado',
                        mesa: '0,50 €',
                        barra: '0,50 €',
                        terraza: '0,50 €'
                    },
                ]
            },
            {
                name: 'Tapas',
                id: 3,
                list: [{
                        name: 'Pincho Tortilla',
                        mesa: '2,25 €',
                        barra: '2,00 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Ensalad. Rusa',
                        mesa: '2,40 €',
                        barra: '2,05 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Plato Jamón',
                        mesa: '6,60 €',
                        barra: '6,50 €',
                        terraza: '6,15 €'
                    },
                    {
                        name: 'Plato Queso',
                        mesa: '5,10 €',
                        barra: '5,00 €',
                        terraza: '4,75 €'
                    },
                    {
                        name: 'Aceitunas',
                        mesa: '1,85 €',
                        barra: '1,75 €',
                        terraza: '1,80 €'
                    },
                    {
                        name: 'Choricitos',
                        mesa: '2,50 €',
                        barra: '2,40 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Mezcla',
                        mesa: '1,30 €',
                        barra: '1,20 €',
                        terraza: '1,55 €'
                    },
                    {
                        name: 'Bolsa Patatas',
                        mesa: '1,35 €',
                        barra: '1,25 €',
                        terraza: '1,50 €'
                    },
                    {
                        name: 'Magro Con Tomate',
                        mesa: '2,30 €',
                        barra: '2,15 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Ali Oli',
                        mesa: '2,40 €',
                        barra: '2,30 €',
                        terraza: '2,30 €'
                    },
                    {
                        name: 'Queso Tomate',
                        mesa: '2,40 €',
                        barra: '2,30 €',
                        terraza: '2,55 €'
                    },
                ]
            }, {
                name: 'Bebidas Calientes',
                id: 4,
                list: [{
                        name: 'Café Con Leche',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,75 €'
                    },
                    {
                        name: 'Café Solo',
                        mesa: '1,30 €',
                        barra: '1,25 €',
                        terraza: '1,50 €'
                    },
                    {
                        name: 'Café Cortado',
                        mesa: '1,30 €',
                        barra: '1,25 €',
                        terraza: '1,50 €'
                    },
                    {
                        name: 'Vaso De Leche',
                        mesa: '1,35 €',
                        barra: '1,25 €',
                        terraza: '1,50 €'
                    },
                    {
                        name: 'Colacao',
                        mesa: '1,70 €',
                        barra: '1,45 €',
                        terraza: '1,80 €'
                    },
                    {
                        name: 'Bombón',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,75 €'
                    },
                    {
                        name: 'Carajillo',
                        mesa: '1,75 €',
                        barra: '1,75 €',
                        terraza: '1,80 €'
                    },
                    {
                        name: 'Carajillo Whisky',
                        mesa: '2,00 €',
                        barra: '2,00 €',
                        terraza: '2,00 €'
                    },
                    {
                        name: 'Belmonte',
                        mesa: '1,90 €',
                        barra: '1,80 €',
                        terraza: '2,00 €'
                    },
                    {
                        name: 'Capuccino',
                        mesa: '1,90 €',
                        barra: '1,80 €',
                        terraza: '2,00 €'
                    },
                    {
                        name: 'Chocolate Tradicio.',
                        mesa: '1,90 €',
                        barra: '1,80 €',
                        terraza: '2,25 €'
                    },
                    {
                        name: 'Te',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,75 €'
                    },
                    {
                        name: 'Manzanilla',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,75 €'
                    },
                    {
                        name: 'Poleo',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,75 €'
                    },
                    {
                        name: 'Tila',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,75 €'
                    },
                    {
                        name: 'Infus. Del Mundo',
                        mesa: '1,60 €',
                        barra: '1,50 €',
                        terraza: '1,75 €'
                    },
                ]
            },
            {
                name: 'Bebidas Frias',
                id: 5,
                list: [{
                        name: 'Coca Cola',
                        mesa: '2,30 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Fanta Naranja/Limón',
                        mesa: '2,30 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Aquarius',
                        mesa: '2,30 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Nestea',
                        mesa: '2,30 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Zumos',
                        mesa: '1,65 €',
                        barra: '1,75 €',
                        terraza: '2,00 €'
                    },
                    {
                        name: 'Batido',
                        mesa: '1,65 €',
                        barra: '1,60 €',
                        terraza: '2,00 €'
                    },
                    {
                        name: 'Granizados',
                        mesa: '2,35 €',
                        barra: '2,05 €',
                        terraza: '2,35 €'
                    },
                    {
                        name: 'Granizados Pequeños',
                        mesa: '1,75 €',
                        barra: '1,65 €',
                        terraza: '1,80 €'
                    },
                    {
                        name: 'Agua Mineral',
                        mesa: '1,30 €',
                        barra: '1,25 €',
                        terraza: '1,40 €'
                    },
                    {
                        name: 'Agua Con Gas',
                        mesa: '1,85 €',
                        barra: '1,60 €',
                        terraza: '2,00 €'
                    },
                    {
                        name: 'Zumos Multifrutas',
                        mesa: '1,75 €',
                        barra: '1,65 €',
                        terraza: '1,80 €'
                    },
                    {
                        name: 'Agua',
                        mesa: '1,25 €',
                        barra: '1,20 €',
                        terraza: '1,40 €'
                    },
                    {
                        name: 'Zumo Naranja',
                        mesa: '2,35 €',
                        barra: '2,05 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Red Bull',
                        mesa: '2,50 €',
                        barra: '2,50 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Horchata',
                        mesa: '2,35 €',
                        barra: '2,05 €',
                        terraza: '2,30 €'
                    },
                    {
                        name: 'Horchata Peq.',
                        mesa: '1,75 €',
                        barra: '1,65 €',
                        terraza: '1,80 €'
                    },
                ]
            },
            {
                name: 'Cervezas y Licores',
                id: 6,
                list: [{
                        name: 'Caña Cerveza',
                        mesa: '1,70 €',
                        barra: '1,70 €',
                        terraza: '1,85 €'
                    },
                    {
                        name: 'Jarra 1/2 Litro',
                        mesa: '3,75 €',
                        barra: '3,75 €',
                        terraza: '4,25 €'
                    },
                    {
                        name: '1/3 Heineken',
                        mesa: '2,25 €',
                        barra: '2,25 €',
                        terraza: '2,40 €'
                    },
                    {
                        name: '1/3 Mahou',
                        mesa: '2,25 €',
                        barra: '2,25 €',
                        terraza: '2,40 €'
                    },
                    {
                        name: '1/3 Maestra',
                        mesa: '2,50 €',
                        barra: '2,40 €',
                        terraza: '2,70 €'
                    },
                    {
                        name: '1/3 Maestra Sin Alcohol',
                        mesa: '2,50 €',
                        barra: '2,40 €',
                        terraza: '2,70 €'
                    },
                    {
                        name: '1/5 Sin Alcohol',
                        mesa: '1,70 €',
                        barra: '1,70 €',
                        terraza: '1,85 €'
                    },
                    {
                        name: '1/5 Cerveza',
                        mesa: '1,70 €',
                        barra: '1,70 €',
                        terraza: '1,85 €'
                    },
                    {
                        name: 'Clara Gaseosa',
                        mesa: '1,70 €',
                        barra: '1,70 €',
                        terraza: '1,85 €'
                    },
                    {
                        name: 'Clara Limón',
                        mesa: '1,70 €',
                        barra: '1,70 €',
                        terraza: '1,85 €'
                    },
                    {
                        name: 'Vino',
                        mesa: '1,90 €',
                        barra: '1,80 €',
                        terraza: '2,25 € '
                    },
                    {
                        name: 'Martini',
                        mesa: '2,60 €',
                        barra: '2,50 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Cantueso Oro',
                        mesa: '3,00 €',
                        barra: '2,80 €',
                        terraza: '3,10 €'
                    },
                    {
                        name: 'Ponche Caballero',
                        mesa: '2,60 €',
                        barra: '2,50 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Pacharán',
                        mesa: '2,60 €',
                        barra: '2,50 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Cointreau',
                        mesa: '3,90 €',
                        barra: '3,65 €',
                        terraza: '4,10 €'
                    },
                    {
                        name: 'Baileys',
                        mesa: '4,25 €',
                        barra: '4,00 €',
                        terraza: '4,50 €'
                    },
                    {
                        name: 'Drambuie',
                        mesa: '4,50 €',
                        barra: '4,25 €',
                        terraza: '4,75 €'
                    },
                    {
                        name: 'Anis Tenis',
                        mesa: '2,50 €',
                        barra: '2,25 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Anís Castellana',
                        mesa: '2,05 €',
                        barra: '1,80 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Anís Del Mono',
                        mesa: '2,05 €',
                        barra: '1,80 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Licores Sabores',
                        mesa: '2,50 €',
                        barra: '2,05 €',
                        terraza: '2,60 €'
                    },
                    {
                        name: 'Tapón Licores Sabores',
                        mesa: '1,80 €',
                        barra: '1,75 €',
                        terraza: '1,90 €'
                    },
                    {
                        name: 'Tapón Whisky',
                        mesa: '2,25 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Moscatel',
                        mesa: '1,90 €',
                        barra: '1,80 €',
                        terraza: '2,25 €'
                    },
                    {
                        name: 'Orujo Hierbas',
                        mesa: '2,05 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Orujo Blanco',
                        mesa: '2,05 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                ]
            },
            {
                name: 'Copas',
                id: 7,
                list: [{
                        name: 'Terry White',
                        mesa: '4,10 €',
                        barra: '4,00 €',
                        terraza: '4,25 €'
                    },
                    {
                        name: 'Bacardi',
                        mesa: '4,75 €',
                        barra: '4,50 €',
                        terraza: '5,00 €'
                    },
                    {
                        name: 'Negrita',
                        mesa: '4,50 €',
                        barra: '4,25 €',
                        terraza: '4,75 €'
                    },
                    {
                        name: 'Cacique',
                        mesa: '4,90 €',
                        barra: '4,60 €',
                        terraza: '5,10 €'
                    },
                    {
                        name: 'Brugal',
                        mesa: '5,25 €',
                        barra: '5,00 €',
                        terraza: '5,50 €'
                    },
                    {
                        name: 'White Label',
                        mesa: '4,75 €',
                        barra: '4,50 €',
                        terraza: '5,00 €'
                    },
                    {
                        name: 'Dyc',
                        mesa: '4,25 €',
                        barra: '4,00 €',
                        terraza: '4,50 €'
                    },
                    {
                        name: 'J&B',
                        mesa: '4,75 €',
                        barra: '4,50 €',
                        terraza: '5,00 €'
                    },
                    {
                        name: 'Ballant.',
                        mesa: '4,80 €',
                        barra: '4,60 €',
                        terraza: '5,10 €'
                    },
                    {
                        name: 'Cardhu',
                        mesa: '6,15 €',
                        barra: '5,90 €',
                        terraza: '6,35 €'
                    },
                    {
                        name: 'Larios',
                        mesa: '4,50 €',
                        barra: '3,85 €',
                        terraza: '4,75 €'
                    },
                    {
                        name: 'Beefeater',
                        mesa: '4,75 €',
                        barra: '4,50 €',
                        terraza: '5,00 €'
                    },
                    {
                        name: 'Gordons',
                        mesa: '4,50 €',
                        barra: '3,85 €',
                        terraza: '4,75 €'
                    },
                    {
                        name: 'Seagram\'S',
                        mesa: '5,25 €',
                        barra: '5,00 €',
                        terraza: '5,50 €'
                    },
                    {
                        name: 'Terry',
                        mesa: '2,05 €',
                        barra: '2,25 €',
                        terraza: '2,50 €'
                    },
                    {
                        name: 'Smirnoff',
                        mesa: '4,50 €',
                        barra: '3,85 €',
                        terraza: '4,75 €'
                    },
                    {
                        name: 'Eristoff',
                        mesa: '4,50 €',
                        barra: '4,25 €',
                        terraza: '4,75 €'
                    },
                ]
            },
            {
                name: 'Helados',
                id: 8,
                list: [{
                        name: 'M&M\'S',
                        mesa: '2,10 €',
                        barra: '2,10 €',
                        terraza: '2,10 €'
                    },
                    {
                        name: 'Kubanito',
                        mesa: '2,35 €',
                        barra: '2,35 €',
                        terraza: '2,35 €'
                    },
                    {
                        name: 'Cono Vainilla Choco Xl',
                        mesa: '2,75 €',
                        barra: '2,75 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Pivot Cono Limon/Fresa',
                        mesa: '2,25 €',
                        barra: '2,25 €',
                        terraza: '2,25 €'
                    },
                    {
                        name: 'Cono Alma Chocolate',
                        mesa: '2,30 €',
                        barra: '2,30 €',
                        terraza: '2,30 €'
                    },
                    {
                        name: 'Kriaturices',
                        mesa: '2,00 €',
                        barra: '2,00 €',
                        terraza: '2,00 €'
                    },
                    {
                        name: 'Pivot King',
                        mesa: '2,75 €',
                        barra: '2,75 €',
                        terraza: '2,75 €'
                    },
                    {
                        name: 'Aupa Lima/Fresa',
                        mesa: '1,60 €',
                        barra: '1,60 €',
                        terraza: '1,60 €'
                    },
                    {
                        name: 'Sandy Pop',
                        mesa: '1,80 €',
                        barra: '1,80 €',
                        terraza: '1,80 €'
                    },
                    {
                        name: 'Snickers',
                        mesa: '2,10 €',
                        barra: '2,10 €',
                        terraza: '2,10 €'
                    },
                    {
                        name: 'Gely',
                        mesa: '1,50 €',
                        barra: '1,50 €',
                        terraza: '1,50 €'
                    },
                    {
                        name: 'Bombon Almendrado',
                        mesa: '2,30 €',
                        barra: '2,30 €',
                        terraza: '2,30 €'
                    },
                    {
                        name: 'Bombon Choco Blanco',
                        mesa: '2,30 €',
                        barra: '2,30 €',
                        terraza: '2,30 €'
                    },
                    {
                        name: 'Bombon Nata',
                        mesa: '2,30 €',
                        barra: '2,30 €',
                        terraza: '2,30 €'
                    },
                    {
                        name: 'Bombon Cacahuete',
                        mesa: '2,40 €',
                        barra: '2,40 €',
                        terraza: '2,40 €'
                    },
                    {
                        name: 'Cono Yogur Fresa Sin Azucar',
                        mesa: '2,30 €',
                        barra: '2,30 €',
                        terraza: '2,30 €'
                    },
                    {
                        name: 'Polo Leche',
                        mesa: '1,10 €',
                        barra: '1,10 €',
                        terraza: '1,10 €'
                    },
                ]
            },
        ],
    },
    computed: {
        currentMenu: function () {
            return this.menu.find(section => section.name == this.view)
        }
    },
    methods: {
        changeView(name) {
            console.log(name);
            this.isOpen = false;
            this.view = name;


        }
    }
})