<template>
    <div class="boxLogin">
        <div>
            <slot>   
                This is is from child             
            </slot>            
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$slots);
    }
}
</script>