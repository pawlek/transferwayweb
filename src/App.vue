<template>
	<div class="container" id="app">
		<v-button @click.native="showModal = !showModal"> </v-button>

		<transition name="modal-transition" enter-active-class="animate__slideInUp" leave-active-class="animate__slideOutDown" v-on:enter="enter" v-on:leave="leave">
			<v-modal v-show="showModal" class="sign-in-modal animate__animated animate__faster">
				<h3 slot="header">custom header</h3>
				<div slot="body">
					<div v-for="(currency, index) in info" class="currency" :key="index">
						{{ currency.description }} | {{index}}:
						<span class="lighten">
							<span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
						</span>
					</div>
				</div>
				<div slot="footer"> 
					<v-button @click.native="showModal = false"> Click </v-button>
				</div>
			</v-modal>
		</transition>
	</div>
</template>


<script>
	import Modal from '@/components/Modal'
	import Buttons from '@/components/Buttons'
	
	export default {
		name: 'App',
		components: {
			'v-modal': Modal,
			'v-button': Buttons
		},
		data() {
			return {
				showModal: false,
				info: null
			};
		},
		methods: {
			enter: function (el) {
				console.log("open modal")
			},
			leave: function (el) {
				console.log("close modal")
			},
		},
		mounted() {
			this.$axios
			.get('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then(response => (this.info = response.data.bpi))
			.catch(error => console.log(error));
		},
		filters: {
			currencydecimal (value) {
				return value.toFixed(2)
			}
		}
	}
</script>

<style lang="scss">
	*{
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}
	html, body{
		height: 100%;
		width: 100%;
	}
	.container{
		height: 100%;
		position: relative;
		background: lightblue;
	}

	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	}
</style>
