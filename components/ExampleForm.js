const exampleForm = {
    template: `
        <form action="#" method="post" @submit.prevent="submitForm">
            <label>
                Nome:
                <input v-model="name" type="text" name="name" placeholder="Nome" />
            </label>
            <label>
                Sexo:
                <select name="sexo" v-model="sexo">
                    <option value="">Escolha</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </label>
            <label>
                Descrição:
                <textarea v-model="description" type="text" name="description" placeholder="Descrição"></textarea>
            </label>
            <label>
                <input v-model="agree" type="checkbox" name="agree" />
                Concordo
            </label>
            <button type="submit">Enviar</button>
        </form>
    `,

    data () {
        return {
            name: '',
            sexo: '',
            description: '',
            agree: false
        }
    },

    methods: {
        submitForm () {
            console.log(this.name)
            console.log(this.description)
            console.log(this.sexo)
            console.log(this.agree)
            
        }
    }
}

app.component('example-form', exampleForm)