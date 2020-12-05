<template>
    <section class="first">
        first sectionss
        <order-form> </order-form>
    </section>
</template>
<script>
    import OrderFormComponent from '@/components/OrderFormComponent'

    export default {
        name: "SectionFirst",
        components: {
            'order-form': OrderFormComponent
		},
    }


</script>
<style lang="scss">
    section{
        height: 100%;
        width: 100%;
    }
</style>
<style lang="scss" scoped>
    @import "../assets/scss/default.scss";

    .no-webp section.first {
		background: url('~@/assets/img/user-bgg.jpg');
		background-size: cover;
	}

	.webp section.first {
		background: url('~@/assets/img/bgg.webp');
		background-size: cover;
	}
    section{
        &.first{
            border: 1px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>