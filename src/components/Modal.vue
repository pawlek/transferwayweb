<template>
    <div class="modal">
        <div class="modal__inner">
            <div class="modal__header">
                <slot name="header"> default header </slot>
            </div>
            <div class="modal__body">
                <slot name="body"> default body </slot>
            </div>
            <div class="modal__footer">
                <slot name="footer"> default footer </slot>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'modal-item',

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


<style  lang="scss" scoped>
.modal {
  &.sign-in-modal {
    background: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    height: 55%;
    .modal__inner {
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 3fr 1fr;
      justify-content: center;
      align-items: center;
    }
  }
  &__inner {
    display: grid;
  }
}
</style>