<template>
  <div class="contact">
      <h1>Contact</h1>
     
    <ul id="ul-users">
        <li v-for="(item, index) in usersData" :key="index">
            {{ item.text }}
        </li>
        <li :title="message">Other information</li>
        <li>Username: {{username}}</li>
    </ul>
    <p>Clicked {{ counter }} times.</p>
    <button @click="Add">Add 1 </button>
<br>
    <form>
        <input @input="username=$event.target.value" type="text" name="username" :value="username"> <br>
        <input v-model="password" type="password" name="password">

        <input type="submit" value="Send Data">
    </form>

    <p>This is userdata</p>
    <p v-html="`<h1 style='color: red'>changeColor</h1>`">aaa</p>

    <div class="container">
        <div class="content" :class="{active: isActive, isActive: active, 'text-danger': hasError}">
            <p>This is p</p>
        </div>

        <div class="content" :class="{active: isActive, isActive: active, 'text-danger': hasError}">
             <p>This is p</p>
        </div>

        <div  class="content" :style="{border: ['5px solid black'], background: bg}" :class="{active: isActive, isActive: active, 'text-danger': hasError}">
             <p>This is p</p>
        </div>
    </div>

    <h2>New Div</h2>
    <div :style="newStyle">
        <p>This is style Object

        </p>
        </div>

    <button @click="toggleDiv">Change div</button>
  </div>
</template>
<script>
    export default {
        data: () => {
            return {
                usersData: [
                    { text: 'Lambok Tulus Simamora'},
                    { text: '082274140481'},
                    { text: 'Jl. Brigjen Katamso'}
                ],
                message: 'This is message!',
                counter: 0,
                username: "",
                password: "",
                isActive: true,
                hasError: false,
                active: false,
                bg: "red",
                newStyle: {
                    width: '100px',
                    height: '100px',
                    background: "red",
                    color: 'blue',
                    border: '1px solid #ccc'
                }
               };
        },
        methods: {
            Add: function() {
                this.counter++;
            },
            toggleDiv: function() {
                this.active = !this.active;
                this.isActive = !this.isActive
            }
        },
        components: {
            
        }
    }
</script>