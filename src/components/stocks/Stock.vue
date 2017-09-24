<template>
	<div class="col-sm-6 col-md-4">
		<div class="card" style="width: 20rem;">
		  <div class="card-body">
		    <h4 class="card-title">{{stock.name}}</h4>
		    <h6 class="card-subtitle mb-2 text-muted">(PRICE: {{stock.price}})</h6>
		    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <input type="number" 
		    v-model="quantity"
			placeholder="Quantity"
		    class="form-controll">
		  <button 
@click="buyStock"
:disabled="quantity <= 0"
		  class="btn btn-success">Buy</button>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		props : ['stock'],
		data() {
			return {
				quantity :0
			}
		},
		methods : {
			buyStock() {
				const order = {
					stockId : this.stock.id,
					stockPrice : this.stock.price,
					quantity : this.quantity
				};
				console.log(order);
				this.quantity = 0;
			}
		}
	}
</script>