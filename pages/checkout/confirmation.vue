<template>
  <div>
    <div class="heading">Order Overview</div>
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
  @import "../../assets/variables";

  .heading {
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 12px 0 24px;
    padding: 8px 16px;
    border-bottom: 4px solid @SECONDARY_BORDER_COLOR;
  }
</style>
