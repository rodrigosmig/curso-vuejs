<template>
    <div>
        <app-title />
        <app-panel />
    </div>
</template>

<script>
    import Title from './Title.vue'
    import Panel from './Panel.vue'
    export default {
        components: {'app-title': Title, 'app-panel': Panel}
    }
</script>
