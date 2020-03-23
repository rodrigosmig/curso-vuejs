<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
            <span>Desafio</span>
            <span class="font-weight-light">Componente</span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
	data() {
		return {
			fotos: [
				{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	}
}
</script>
