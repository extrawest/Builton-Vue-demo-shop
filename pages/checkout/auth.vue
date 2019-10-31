<template>
  <div>
    {{$options.name}}
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: 'CheckoutAuth',
        layout: 'checkout',
        middleware: 'checkAuth'
    })
    export default class CheckoutAuth extends Vue {
    }
</script>

<style lang="less" scoped>

</style>
