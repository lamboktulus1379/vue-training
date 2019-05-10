<template>
    <div class="register">
        <h1>Register</h1>
        <boxRegister 
            @input="checkEmit" 
            v-for="(item, index) in items" 
            :key="index" 
            v-model="item.value"
            :label="item.whatInput"
            :placeholder="item.ph"
            >       
        </boxRegister>
    </div>
</template>
<script>
import boxRegister from '../components/boxRegister'
import navigationMenu from '../components/navigationMenu'
export default {
    data: () => {
        return {
            username: "",
            items: [
                {whatInput: "Username", value: "", ph: true},
                {whatInput: "Password", value: "", ph: false},
                {whatInput: "Address", value: "", ph: false},
                {whatInput: "DOB", value: "", ph: false},
            ]
        }
    },

    components: {
        boxRegister,
    },
    methods: {
        checkEmit($event) {
            // console.log($event)
        }
    }
}
</script>