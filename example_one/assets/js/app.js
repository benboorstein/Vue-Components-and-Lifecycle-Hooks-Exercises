let app = Vue.createApp({
    
})

app.component('login-form', { // the 'login-form' component // Regarding the 'button' in the template below, note that buttons are type="submit" by default
    template: `
        <form @submit.prevent="handleSubmit">
            <h1>{{ title }}</h1>
            <custom-input v-model="email" v-bind:label="emailLabel"/>
            <custom-input v-model="password" v-bind:label="passwordLabel"/>
            <button>Log in</button>
        </form>
    `,
    components: ['custom-input'], // needs to be here for the 'login-form' component to recognize the 'custom-input' component (a child of 'login-form')
    data() {
        return {
            title: 'Login Form', // Note that any variables defined on the 'login-form' component's 'data' property (e.g., 'title') need to be used inside the 'login-form' component's template, as opposed to the regular template (hence the use of '{{ title }}' in this component's template just above), because the 'login-form' component is a self-contained component. (All Vue components, by definition, are self-contained in the same way...I think.)
            email: '',
            password: '',
            emailLabel: 'Email',
            passwordLabel: 'Password'
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.email, this.password)
        }
    }
})

app.component('custom-input', { // this component is actually a child component of the 'login-form' component // note that the 'inputValue' goings on START on this line (below): <input type="text" v-model="inputValue">
    template: `
        <label>
            {{ label }}
            <input type="text" v-model="inputValue">
        </label>
    `,
    props: ['label', 'modelValue'], // in the array is a list of properties being passed down from the parent component ('login-form') to this component (the child component) // note that this component has access to 'modelValue' because the 'login-form' component's template's 'custom-input' elements' v-models have a modelValue property (for example, ':modelValue="email"') "under the hood"
    computed: {
        inputValue: {
            get() { // called a "getter function"
                return this.modelValue // in case it's not clear: 'modelValue' is whatever value(s) is/are being entered into the input
            },
            set(value) { // called a "setter function"
                this.$emit('update:modelValue', value) // $emit() allows the emission of events that other components can listen to; in this case, 'v-model="email"' and 'v-model="password"' (from the 'login-form' component's template) are listening for the 'update:modelValue' event, and when they hear it, they update the values of 'email' and 'password' (from the 'login-form' component's 'data' property). // The first argument is the type of event to be emitted. The second argument is the value that will be passed through the event (which, in this case, is 'value', which is the value that we're getting from the input...just because of how the 'set()' function works, I think).

            }
        }
    }
})

app.mount('#app')