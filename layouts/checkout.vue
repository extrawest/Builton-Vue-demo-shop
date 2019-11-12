<template>
  <div class="main-container">
    <AppHeader :hide-menu="true"/>
    <div class="wrapper">
      <nuxt/>
      <CheckoutNav :steps="steps"/>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator'
    import AppHeader from '~/components/AppHeader.vue'
    import CheckoutNav from '~/components/CheckoutNav.vue'

    @Component({
        components: {
            AppHeader,
            CheckoutNav
        }
    })
    export default class Checkout extends Vue {
        $cookies: any;

        @Watch('$store.state.cart')
        onCartChange() {
            this.$store.dispatch('updateServerCart');
        }

        steps: any[] = [
            {
                path: 'cart',
                label: 'Cart',
            },
            {
                path: 'auth',
                label: 'Auth',
            },
            {
                path: 'payment_method',
                label: 'Payment method',
            },
            {
                path: 'delivery_address',
                label: 'Delivery address',
            },
            {
                path: 'confirmation',
                label: 'Confirm',
            }
        ]
    }
</script>


<style lang="less" scoped>
  @import "../assets/variables";

  .wrapper {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 85vh;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 64px;
    z-index: 1;
  }

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

  @media (max-width: 780px) {
    .wrapper {
      padding: 24px 16px;
      overflow: hidden;
    }
  }
</style>
