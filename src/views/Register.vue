<template>
    <div class="register">
        <h1>Register</h1>
        <boxRegister @input="checkEmit">
            
        </boxRegister>
    </div>
</template>
<script>
import boxRegister from '../components/boxRegister'
export default {
    data: () => {
        return {
            username: "",
            items: [
                {whatInput: "Username", value: ""},
                {whatInput: "Password", value: ""},
                {whatInput: "Address", value: ""},
                {whatInput: "DOB", value: ""},
            ]
        }
    },
    components: {
        boxRegister
    },
    methods: {
        checkEmit($event) {
            // console.log($event)
        }
    }
}
</script>