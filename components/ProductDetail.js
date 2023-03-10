const productDetail = {
    template: `
        <img v-bind:src="product.image" v-bind:alt="product.title" style="max-width: 300;">

        <br>

        <strong v-if="product.stars > 0">{{ product.stars }}</strong>

        <br><br>

        <button @click.prevent="addCart(product)" :disabled="inCart" :class="[{'button-disabled' : inCart}, 'color']">
            ADD CART
        </button>
    `,

    props: {
        product: {
            type: Object,
            required: true
        },
        inCart: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            example: 13
        }
    },

    methods: {
        addCart (product) {
            console.log('Add Cart in component!')
        },

    },
}

app.component('product-detail', productDetail)