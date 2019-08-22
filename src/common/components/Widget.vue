<template>
    <div class="widget-component">
        Widget Component
    </div>
</template>

<script>
    console.log('loading: widget-component')

    export default {
        name: 'Widget',
    }
</script>

<style scoped lang="scss">
    /* widget component */
    .widget-component {
        padding: 3px;
        margin: 1px 0;
        border: 1px solid #000;
        color: blue;
    }
</style>
