<template>
    <div class="col-sm-6 col-md-4">
        <div class="card" style="width: 20rem;">
            <div class="card-body">
                <h4 class="card-title">{{stock.name}}</h4>
                <h6 class="card-subtitle mb-2 text-muted">(PRICE: {{stock.price}} | Quantity : {{stock.quantity}})</h6>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="number"
                       v-model="quantity"
                       placeholder="Quantity"
                       class="form-controll">
                <button
                        @click="sellStock"
                        :disabled="insufficientQuantity || quantity <= 0"
                        class="btn btn-success">
                    {{ insufficientQuantity ? 'Not enough' : 'Sell'}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const oreder = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(oreder);
                this.quantity = 0;
            },
        }
    }
</script>