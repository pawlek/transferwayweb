<template>
    <div class="order-form">
        <input v-model="originAdress" placeholder="отредактируй меня" />
        <p>Введённое сообщение: {{ originAdress }}</p>
        <input v-model="destinationAdress" placeholder="отредактируй меня" />
        <p>Введённое сообщение: {{ destinationAdress }}</p>
        <hr />
        <p class="google-link">{{ googleApi }}</p>
    </div>
</template>
<script>
	export default {
		name: 'OrderForm',
        data() {
			return {
                originAdress: 'Ljubljana',
                destinationAdress: 'Koper',
                googleLink: 'https://maps.googleapis.com/maps/api/geocode/json?',
                googleApiKey: 'key=AIzaSyCOg3Uf5dBeiOOybZEOef_8--NwgyF81YI',
                googleLang: 'language=en',
                googleLib: 'libraries=places',
                googleUnits: 'units=metric'
            };
        },
        computed: {
            googleApi: function () {
                return this.googleLink + '&' + this.googleUnits + '&address=' + this.originAdress + '&address=' + this.destinationAdress + '&' + this.googleApiKey + '&' + this.googleLang + '&' + this.googleLib
            }
        },
        mounted() {
			this.$axios
			.get(googleApi)
			.then(response => (this.info = response.data.bpi))
			.catch(error => console.log(error));
		},
	}
</script>

<style  lang="scss" scoped>
    .google-link{
        background: #fff;
    }
</style>