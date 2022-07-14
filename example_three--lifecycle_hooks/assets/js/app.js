let app = Vue.createApp({
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        toggleBox() {
            this.isVisible = !this.isVisible
        }
    },
    updated() { // the reason for 'updated', 'created', 'mounted', and 'unmounted' (each is a Lifecycle Hook) being included in THIS project is so that you can see at what point each prints to the console
        console.log('updated') // prints every time 'isVisible' (in 'data') is updated
    }
})

app.component('test-box', {
    template: `
        <div class="box"></div>
    `,
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    unmounted() {
        console.log('unmounted') // prints when the box leaves the DOM (which you can observe happening in the 'elements' tab of your console)
    }
})

app.mount('#app')


// NOTE: This project (by which I mean 'example_three...') is done; I don't have to alter the code here in any way. And after finishing this project, I stopped following the video (https://www.youtube.com/watch?v=FXpIoQ_rT_c). And I stopped at 1:14:30. At this point in the video a large project starts, and I didn't want to dive into it at the time.

// good, clear article on lifecycle hooks: https://michaelnthiessen.com/call-method-on-page-load/