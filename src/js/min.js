window.Vue = require('vue');
new Vue({
    el: "#app",
    data: {
        toogle: false,
    },
    methods: {
        on() {
            this.toogle = !this.toogle
        }
    },
})