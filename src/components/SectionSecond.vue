<template>
    <section class="second">second section</section>
</template>
<script>
    export default {
        name: "SectionSecond"
    }
</script>
<style lang="scss">
    section{
        height: 100%;
        width: 100%;
    }
</style>
<style lang="scss" scoped>
    .no-webp section.second {
		background: url('~@/assets/img/user-bgg.jpg');
		background-size: cover;
	}

	.webp section.second {
		background: url('~@/assets/img/bgg.webp');
		background-size: cover;
	}
    section{
        &.second{
            border: 1px solid red;
        }
    }
</style>