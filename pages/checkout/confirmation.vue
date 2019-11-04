<template>
  <div>
    <div class="heading">Order Overview</div>
    <ProductList :editable="false" />

    <AppButton class="button" title="Place order"/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import ProductList from './cart/ProductList.vue'
    import AppButton from '~/components/AppButton.vue'

    @Component({
        name: 'confirmation',
        layout: 'checkout',
        components: {
            ProductList,
            AppButton
        }
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

  .button {
    margin: 32px 0 32px auto;
  }
</style>
