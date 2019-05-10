<template>
    <div class="boxEmployee">
        <h3>{{ employeeName }} </h3>
        <p> {{ employeeAddress }} </p>
        <img :src="employeeImage" width="100" height="100"/>
    </div>
</template>
<script>
export default {
    props: [
        'employeeName',
        'employeeAddress',
        'employeeImage'
    ]
}
</script>
<style lang="scss" scoped>
    .boxEmployee {
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        h3 {
            font-family: 'Courier New', Courier, monospace;            
        }
        p {
            text-align: center;
        }
    }
</style>

