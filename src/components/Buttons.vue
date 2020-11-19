<template>
    <div class="btn">
       <a href="#">
            <slot>Button</slot>
       </a>
    </div>
</template>


<style lang="scss" scoped>
    .btn{
        background: #000;
        padding: 10px 20px;
        display: inline-block;
        border-radius: 10px;
        a{
            text-decoration: none;
            color: #fff;
        }
    }
</style>