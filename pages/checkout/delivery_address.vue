<template>
  <div>
    {{$options.name}}
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: "delivery_address",
        layout: 'checkout'
    })
    export default class DeliveryAddress extends Vue {
    }
</script>

<style lang="less" scoped>

</style>
