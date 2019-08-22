<template>
    <div class="foo-container">
        <div class="foo-component">
            Foo Component

            <button @click="toggle">Toggle</button>
            <strong>
                <template v-if="fooActive">
                    Foo Active
                </template>
                <template v-else>
                    Foo Inactive
                </template>
            </strong>
        </div>

        <fuzz/>
        <shared/>
    </div>
</template>

<script>
    import Fuzz from '@foo/components/Foo/Fuzz'
    import { mapGetters } from 'vuex'

    const Shared = () => import(
      /* webpackChunkName: "shared/widget" */
      '@common/components/Widget'
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
        padding: 3px;
        border: 1px solid #000;
    }
</style>
