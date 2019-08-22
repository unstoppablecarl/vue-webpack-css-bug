<template>
    <div>
        Base Component
        <shared/>
    </div>
</template>

<script>
    //import Shared from '@base/components/Shared'
    import '@base/design/main.scss'
    const Shared = () => import(
      /* webpackChunkName: "shared/component" */
      '@base/components/Shared'
      )
    console.log('base-component')

    export default {
        name: 'Base',
        components: { Shared },
    }
</script>

<style scoped lang="scss">
    /* base component */
    .base-component {
        color: green;
    }
</style>
