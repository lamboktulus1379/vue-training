<template>
    <div class="box">
        <h3>{{ boxName }} </h3>
        <p> {{ boxPrice }} </p>
    </div>
</template>
<script>
export default {
    props: [
        'boxName',
        'boxPrice'
    ]
}
</script>
<style lang="scss" scoped>
    .box {
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        h3 {
            font-family: 'Courier New', Courier, monospace;          
        }
    }
</style>

