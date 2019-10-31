<template>
  <div>
    {{$options.name}}
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        name: 'confirmation',
        layout: 'checkout'
    })
    export default class Confirmation extends Vue {
    }
</script>

<style lang="less" scoped>

</style>
