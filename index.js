new Vue({
    el: '#app',
    data: {
        isOpen: false,
        view: 'Bebidas',
        menu: [{
                name: 'Bebidas',
                id: 1,
                list: [{
                        name: 'Coca Cola',
                        description: 'prueba',
                        mesa: '1€',
                        barra: '1€',
                        terraza: '1€'
                    },
                    {
                        name: 'Pepsi',
                        mesa: '1€',
                        barra: '1€',
                        terraza: '1€'
                    },
                ]
            },
            {
                name: 'Desayunos',
                id: 2,
                list: [{
                        name: '1/2 Tostada y Café',
                        mesa: '1€',
                        barra: '1€',
                        terraza: '1€'
                    },
                    {
                        name:'Tostada entera y Café',
                        mesa: '1€',
                        barra: '1€',
                        terraza: '1€'
                    },
                ]
            },
            {
                name: 'Sandwiches',
                id: 3,
                list: [{
                    name: 'Sandwich mixto',
                    description: 'Jamónmon york y queso tostado',
                    mesa: '1€',
                    barra: '1€',
                    terraza: '1€'
                },
                {
                    name:'Sandwich especial',
                    description: 'Lechuga, tomate, esparragos, huevo cocido y atún con un chorrito de mayonesa',
                    mesa: '1€',
                    barra: '1€',
                    terraza: '1€'
                },
            ]
            },
            {
                name: 'Bocadillos',
                id: 4,
                list: [{
                    name: 'Tortilla de patatas',
                    mesa: '1€',
                    barra: '1€',
                    terraza: '1€'
                },
                {
                    name:'Jamón serrano',
                    mesa: '1€',
                    barra: '1€',
                    terraza: '1€'
                },
                {
                    name:'Lomo y queso',
                    mesa: '1€',
                    barra: '1€',
                    terraza: '1€'
                },
            ]
            }
        ],
    },
    computed:{
        currentMenu:function(){
            return this.menu.find(section => section.name == this.view)
        }
    },
    methods:{
        changeView(name){
            console.log(name);
            this.isOpen = false;
            this.view = name;

            
        }
    }
})