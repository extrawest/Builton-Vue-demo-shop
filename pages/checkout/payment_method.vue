<template>
  <div>
    {{$options.name}}
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: "payment_method",
        layout: 'checkout'
    })
    export default class PaymentMethod extends Vue {
    }
</script>

<style lang="less" scoped>

</style>
