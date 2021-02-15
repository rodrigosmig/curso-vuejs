import Vue from 'vue'

export default new Vue({
    methods: {
        changeUser(user) {
            this.$emit('changeUser', user)
        },
        catchUser(callback) {
            this.$on('changeUser', callback)
        }
    }
})