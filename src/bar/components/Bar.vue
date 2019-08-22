<template>
    <div class="bar-component">
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

    console.log('loading: bar-component')

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
        color: teal;
    }
</style>
