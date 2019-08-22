<template>
    <div>
        Bar Component
        <button @click="toggle">Test</button>
        <strong>
            <template v-if="active">
                Active
            </template>
            <template v-else>
                Inactive
            </template>
        </strong>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    console.log('bar-component')

    export default {
        name: 'Bar',
        methods: {
            toggle() {
                this.$store.dispatch('toggleActive')
            },
        },
        computed: {
            ...mapGetters(['active']),
        },
    }
</script>

<style scoped lang="scss">
    /* bar component */
    .bar-component {
        color: green;
    }
</style>
