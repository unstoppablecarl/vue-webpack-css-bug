<template>
    <div>
        Foo Component

        <button @click="toggle">Test Foo</button>
        <strong>
            <template v-if="fooActive">
                Foo Active
            </template>
            <template v-else>
                Foo Inactive
            </template>
        </strong>

        <fuzz/>
        <shared/>
    </div>
</template>

<script>
    import Fuzz from '@foo/components/Foo/Fuzz'
    import { mapGetters } from 'vuex'

    const Shared = () => import(
      /* webpackChunkName: "shared/component" */
      '@base/components/Shared'
      )
    console.log('foo-component')

    export default {
        name: 'Foo',
        components: { Shared, Fuzz },
        methods: {
            toggle() {
                this.$store.dispatch('toggleFooActive')
            },
        },
        computed: {
            ...mapGetters(['fooActive']),
        },
    }
</script>

<style scoped lang="scss">
    /* foo component */
    .foo-component {
        color: green;
    }
</style>
