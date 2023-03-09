const app = {
    data () {
        return {
            title: 'Curso de Vue 3',
            name: 'Carlos',
            lastName: 'Ferreira',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme muito legal',
                    image: './assets/images/imagem-01.jpeg',
                    stars: 3,
                },
                {
                    title: 'Filme 02',
                    description: 'Filme muito legal (2)',
                    image: './assets/images/imagem-02.jpeg',
                    stars: 0
                }
            ],
            cart: [],
            styles: {
                'background-color': '#000',
                'color': '#fff'
            },
            theme: true
        }
    },

    methods: {
        addCart (product) {
            this.cart.push(product)
        },

        inCart (product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart (product) {
            this.cart = this.cart.filter(e => e != product)
        },

        toggleTheme () {
            this.theme = !this.theme

            if (this.theme) {
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'
            } else {
                this.styles.backgroundColor = '#fff'
                this.styles.color = '#000'
            }
        }
    },

    computed: {
        fullName () {
            return this.name + ' ' + this.lastName
        }
    }
}

Vue.createApp(app).mount('#app')