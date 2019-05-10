<template>
    <div class="boxRegister">
        <div @click="toggleFocus" class="form-register">
            <div class="form-content">
                <label @click="toggleFocus" :class="{focus: isFocus, noFocus: isNotFocus}" for="username">{{ data[0] }}</label>
                <input
                    @input="$emit('input', $event.target.value)"
                    @blur="toggleFocus"
                    :class="{focusInput: isFocusInput, noFocusInput: isNotFocusInput}"
                    id="username"
                    :value="value"
                    autocomplete="false"
                    />
            </div>

            <div class="formContent">
                <label @click="toggleFocus" :class="{focus: isFocus, noFocus: isNotFocus}" for="email">{{ data[1] }}</label>
                <input
                    @input="$emit('input', $event.target.value)"
                    @blur="toggleFocus"
                    :class="{focusInput: isFocusInput, noFocusInput: isNotFocusInput}"
                    id="email"
                    :value="value"
                    autocomplete="false"
                    />
            </div>

            <div class="formContent">
                <label @click="toggleFocus" :class="{focus: isFocus, noFocus: isNotFocus}" for="password">{{ data[2] }}</label>
                <input
                    @input="$emit('input', $event.target.value)"
                    @blur="toggleFocus"
                    :class="{focusInput: isFocusInput, noFocusInput: isNotFocusInput}"
                    id="password"
                    :value="value"
                    autocomplete="false"
                    />
            </div>

            <div class="formContent">
                <label @click="toggleFocus" :class="{focus: isFocus, noFocus: isNotFocus}" for="confirm-password">{{ data[3] }}</label>
                <input
                    @input="$emit('input', $event.target.value)"
                    @blur="toggleFocus"
                    :class="{focusInput: isFocusInput, noFocusInput: isNotFocusInput}"
                    id="confirm-password"
                    :value="value"
                    autocomplete="false"
                    />
            </div>

            <div class="formContent">
                <button>Register</button>
            </div>

            <p>{{ value }}</p>
        </div>
    </div>
</template>
<script>

export default {
    data: () => {
        return {
            isNotFocus: true,
            isFocus: false,
            
            isFocusInput: false,
            isNotFocusInput: true,

            data: [
                "Username",
                "Email",
                "Password",
                "Confirm Password"
            ]
        }
    },

    props: [
        'value'
    ],
    methods: {
        toggleFocus: function() {
            this.isNotFocus = !this.isNotFocus;
            this.isFocus = !this.isFocus;

            this.isFocusInput = !this.isFocusInput;
            this.isNotFocusInput = !this.isNotFocusInput;
        }
    }
}
</script>
<style lang="scss" scoped>

    .form-register {
        width: 500px;
        border: 1px solid #ccc;
        background: #f5f5f5;

        .form-content {
            position: relative;
            width: 200px;
            margin-top: 20px;

            label {
                display: block;
                position: absolute;
                top: 10px;
                left: 5px;
            }

            input {
                font-size: 25px;
                text-align: left;
                border: none;
                outline: none;
            }

            .focus {
                top: -10px;
            }

            .focusInput {
                border: 1px solid green;
                border-radius: 2px;
                color: black;            
            }        
        }
    }
    
</style>