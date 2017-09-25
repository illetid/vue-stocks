<template>
    <div class="col-sm-6 col-md-4">
        <div class="card" style="width: 20rem;">
            <div class="card-body">
                <h4 class="card-title">{{stock.name}}</h4>
                <h6 class="card-subtitle mb-2 text-muted">(PRICE: {{stock.price}})</h6>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="number"
                       v-model="quantity"
                       placeholder="Quantity"
                       class="form-controll"
                       :class="{danger : insufficientFunds}"
                >
                <button
                        @click="buyStock"
                        :disabled="insufficientFunds || quantity <= 0"
                        class="btn btn-success">
                    {{ insufficientFunds ? 'insufficient Funds' : 'Buy'}}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };

                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        }
    }
</script>