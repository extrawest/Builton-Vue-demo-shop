<template>
  <div class="main-container">
    <AppHeader :hide-menu="true" />
    <div class="wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import AppHeader from '~/components/AppHeader.vue'

    @Component({
        components: {
            AppHeader
        }
    })
    export default class Checkout extends Vue{
        $cookies: any;
        @Watch('$store.state.cart')
        async onCartChange(newVal: any) {
            this.$cookies.set('built-on-cart', newVal);
        }
    }
</script>


<style lang="less" scoped>
  @import "../assets/variables";

  .main-container {
    position: relative;
    overflow: hidden;
    min-height: 100vh;

    &:before,
    &:after {
      position: absolute;
      content: "";
      width: 200%;
      height: 100%;
      right: 100%;
      bottom: -40%;
      background-color: @ORANGE_BACKGROUND;
    }

    &:before {

      transform: translateX(5%) skew(70deg);
    }
    &:after {
      background-color: @TERTIARY_BACKGROUND;
      right: -180%;
      bottom: 0;
      z-index: 0;
      transform: skew(-32deg);
    }
  }
</style>
