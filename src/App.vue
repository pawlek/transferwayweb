<template>
    <div class="container" id="app">
        <section-first />
        <section-second />
		
        <v-button @click.native="showModal = !showModal">
            <span slot="button">Open Modal</span>
        </v-button>

        <transition
            name="modal-transition"
            enter-active-class="animate__slideInUp"
            leave-active-class="animate__slideOutDown"
            v-on:enter="enter"
            v-on:leave="leave"
        >
            <v-modal
                v-show="showModal"
                class="sign-in-modal animate__animated animate__faster"
            >
                <h3 slot="header">custom header</h3>
                <div slot="body">
                    <div
                        v-for="(currency, index) in info"
                        class="currency"
                        :key="index"
                    >
                        {{ currency.description }} | {{ index }}:
                        <span class="lighten">
                            <span v-html="currency.symbol"></span
                            >{{ currency.rate_float | currencydecimal }}
                        </span>
                    </div>
                </div>
                <div slot="footer">
                    <v-button @click.native="showModal = false">
                        Click
                    </v-button>
                </div>
            </v-modal>
        </transition>
    </div>
</template>


<script>
	import SectionFirst from '@/components/SectionFirst'
	import SectionSecond from '@/components/SectionSecond'

	import ModalComponent from '@/components/ModalComponent'
	import ButtonsComponent from '@/components/ButtonsComponent'
	
	import GoogleMapComponent from '@/components/GoogleMapComponent'
	
	export default {
		name: 'App',
		components: {
			'section-first': SectionFirst,
			'section-second': SectionSecond,
			'v-modal': ModalComponent,
			'v-button': ButtonsComponent,
            'v-google-map': GoogleMapComponent
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
	.no-webp .container {
		background: url('~@/assets/img/user-bgg.jpg');
		background-size: cover;
	}

	.webp .container {
		background: url('~@/assets/img/bgg.webp');
		background-size: cover;
	}
	.container{
		height: 100%;
		position: relative;
	}
	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	}
</style>