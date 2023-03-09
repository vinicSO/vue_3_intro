const app = {
    data () {
        return {
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
            ]
        }
    }
}

Vue.createApp(app).mount('#app')