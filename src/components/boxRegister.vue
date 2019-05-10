<template>
    <div class="boxRegister">
        <div @click="toggleFocus" class="form-register">
            <div class="form-content">
                <label @click="toggleFocus" :class="{focus: isFocus, noFocus: isNotFocus}" :for="label">{{ label }}</label>
                <input
                    @input="$emit('input', $event.target.value)"
                    @blur="toggleFocus"
                    :class="{focusInput: isFocusInput, noFocusInput: isNotFocusInput}"
                    :id="label"
                    :value="value"
                    autocomplete="false"
                    :disabled="placeholder"
                    />
            </div>

            <p>{{ placeholder }}</p>
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
        }
    },

    props: [
        'value',
        'label',
        'placeholder'
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