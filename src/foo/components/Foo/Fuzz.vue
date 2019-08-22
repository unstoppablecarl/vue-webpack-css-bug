<template>
    <div class="fuzz-component">
        Fuzz Component
    </div>
</template>

<script>
    console.log('fuzz-component')

    export default {
        name: 'Fuzz',
    }
</script>

<style scoped lang="scss">
    /* fuzz component */
    .fuzz-component {
        border: 1px solid #333;
        padding: 3px;
        background: #ccc;

        color: green;
    }
</style>
