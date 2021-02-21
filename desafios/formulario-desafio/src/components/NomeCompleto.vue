<template>
    <div>
        <rotulo nome="Nome">
            <input :value="value.name" @input="alterarNome" type="text">
        </rotulo>

        <rotulo nome="Sobrenome">
            <input :value="value.surname" @input="alterarSobreNome" type="text">
        </rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: { Rotulo },
    methods: {
        alterarNome(event) {
            this.$emit('input', { name: event.target.value, surname: this.value.surname })
        },
        alterarSobreNome(event) {
            this.$emit('input', { name: this.value.name, surname: event.target.value })
        }
    }
}
</script>

<style>

</style>