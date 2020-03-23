new Vue({
    el: "#desafio",
    data: {
        nome: "Rodrigo Miguel",
        idade: 36,
        link: "https://iv1.lisimg.com/image/429549/400full-rachel-mcadams.jpg"
    },
    methods: {
        getRandom: function() {
            return Math.random()
        }
    }
})