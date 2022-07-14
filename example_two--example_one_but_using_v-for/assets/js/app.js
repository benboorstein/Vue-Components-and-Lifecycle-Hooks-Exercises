let app = Vue.createApp({

})

app.component('login-form', {
    template: `
        <form @submit.prevent="handleSubmit">
            <h1>{{ title }}</h1>
            <custom-input
                v-for="(input, i) in inputs"
                :key="i"
                v-model="input.value"
                :label="input.label"
                :type="input.type"
            />
            <button>Log in</button>
        </form>
    `,
    components: ['custom-input'],
    data() {
        return {
            title: 'Login Form',
            inputs: [
                {
                    label: 'Email',
                    value: '',
                    type: 'email'

                },
                {
                    label: 'Password',
                    value: '',
                    type: 'password'

                }
            ]
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.inputs[0].value, this.inputs[1].value)
        }
    }
})

app.component('custom-input', {
    template: `
        <label>
            {{ label }}
            <input :type="type" v-model="inputValue">
        </label>
    `,
    props: ['label', 'type', 'modelValue'],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value) // for the lines of code of which I'd benefit from an explanation, like this one, go to the 'app.js' file of 'example_one'
            }
        }
    }
})

app.mount('#app')