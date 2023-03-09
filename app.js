const app = {
    data () {
        return {
            name: 'Carlos',
            lastName: 'Ferreira',
            product: {
                title: 'Filme 01',
                description: 'Filme muito legal',
                image: './assets/images/imagem-01.jpeg'
            },
            product2: {
                title: 'Filme 02',
                description: 'Filme muito legal (2)',
                image: './assets/images/imagem-02.jpeg'
            }
        }
    }
}

Vue.createApp(app).mount('#app')