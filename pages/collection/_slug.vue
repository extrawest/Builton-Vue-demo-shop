<template>
  <div>
    {{products}}
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    Component({
        name: 'ProductCollection',
        async fetch({store, params}) {
            await store.dispatch('fetchProducts', params.slug)
        }
    });
    export default class ProductCollection extends Vue {
        get products(): any {
            return this.$store.getters.getProducts
        }
    }
</script>

<style lang="less" scoped>

</style>
