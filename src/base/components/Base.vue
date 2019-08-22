<template>
    <div>
        <h1>Base Component</h1>
        <shared/>
    </div>
</template>

<script>
    import '@base/design/main.scss'
    const Shared = () => import(
      /* webpackChunkName: "shared/widget" */
      '@common/components/Widget'
      )
    console.log('loading: base-component')

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
