<template>
    <section class="second">
        <div class="line">
            <h3> TOP ROUTES </h3>
        </div>
        <div class="line blocks">
             <div class="block top-routes">
                <div class="block__header"> header</div>
                <div class="block__body"> body</div>
                <div class="block_footer"> footer</div>
            </div>
            <div class="block top-routes">
                2
                <div class="block__header"></div>
                <div class="block__body"></div>
                <div class="block_footer"></div>
            </div>
            <div class="block top-routes">
                3
                <div class="block__header"></div>
                <div class="block__body"></div>
                <div class="block_footer"></div>
            </div>
        </div>
    </section>
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
    // .no-webp section.second {
	// 	background: url('~@/assets/img/user-bgg.jpg');
	// 	background-size: cover;
	// }

	// .webp section.second {
	// 	background: url('~@/assets/img/bgg.webp');
	// 	background-size: cover;
	// }
    section{
        &.second{
            padding: 20px;
            border: 1px solid red;
            background: #fff;
            color: red;
            height: 70vh;
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-rows: 1fr 4fr;

            .line{
                border: 1px solid green;
                width: 100vw;
                height: 100%;
                &.blocks{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 20px;
                    justify-content: center;
                    align-items: center;

                    .block{
                        width: 70%;
                        border-radius: 10px;
                        align-self: center;
                        justify-self: center;
                        &.top-routes{
                            height: 80%;
                            border: 1px solid red;
                            display: grid;
                            justify-content: center;
                            align-items: center;

                        }
                    }
                }
            }
        }
    }
</style>