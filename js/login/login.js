const { createApp } = Vue;
createApp({
    data() {
        return {
            findIdModalDisplay: false,
            findPasswordDisplay: false,
        }
    },
    methods: {
        toggleFindIdModal() {
            this.findIdModalDisplay = !this.findIdModalDisplay;
        },
        toggleFindPasswordModal() {
            this.findPasswordDisplay = !this.findPasswordDisplay;
        }
    }
}).mount('#loginPage');

