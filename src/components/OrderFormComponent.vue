<template>
    <div class="order-form">
        <form method="post" action="index.php">
            <div class="block address-from">
                <input
                    type="text"
                    id="pickupPointInput"
                    name="from"
                    placeholder="Start type your address, airport, or hotel name..."
                />
                <label for="from" class="label-from">
                    <span class="content-name">From: </span>
                </label>
            </div>
            <div class="block change" data-tippy-content="Swap addresses">
                <i class="fas fa-exchange-alt"></i>
            </div>
            <div class="block address-to">
                <input
                    type="text"
                    id="dropPointInput"
                    name="to"
                    placeholder="Start type your address, airport, or hotel name..."
                />
                <label for="to" class="label-to">
                    <span class="content-name">To: </span>
                </label>
            </div>
            <div class="block date">
                <input
                    type="text"
                    id="departureDate"
                    name="date"
                    autocomplete="off"
                    readonly
                />

                <label for="date" class="label-date">
                    <span class="content-name date"> Date: </span>
                </label>
                <a href="#" class="reset-date"> <i class="fas fa-times"></i></a>
            </div>

            <v-button
                type="submit"
                class="block get"
                id="get_price"
                onclick="ym(52727764, 'reachGoal', 'get_price'); return true;"
            >
                <i class="fas fa-search"></i>
                <span slot="button">Get price</span>
            </v-button>
        </form>
    </div>
</template>
<script>
    import ButtonsComponent from '@/components/ButtonsComponent'

	export default {
        name: 'OrderForm',
        components: {
			'v-button': ButtonsComponent
		},
	}
</script>

<style  lang="scss" scoped>
    @import "../assets/scss/default.scss";  
    .order-form{
        width: 80%;
        text-align: left;
        position: relative;
        form{
            background: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 80px;
            position: relative;
            @include border-radius(10px);
            text-align: left;

            .block{
                position: relative;
                &.address-from,
                &.address-to{
                    width: 30%;
                }
                input {
                    height: 100%;
                    width: 100%;
                    padding-top: 20px;
                    padding-left: 15px;
                    color: red;
                    outline: none;
                    border: none;
                        &::placeholder {
                            color: #acacac;
                            font-size: 12px;
                            // padding: 10px;
                            box-sizing: border-box;
                        }
                            // &:valid~.reset-date {
                            //     display: flex;
                            // }
                }
                        label {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            padding-left: 10px;
                            width: 100%;
                            height: 100%;
                            pointer-events: none;
                            .content-name {
                                position: absolute;
                                font-size: 14px;
                            }
                        }
                &.get{
                    background: $default-color;
                }
            }
        }
    }
</style>