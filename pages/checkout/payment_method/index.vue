<template>
  <div>
    <div class="heading">Payment method</div>
    <div class="heading__caption">Selected payment method</div>

    <PaymentMethodBox />

    <AppButton class="button"
               @click="$router.push('/checkout/delivery_address')" title="next"/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import AppButton from '~/components/AppButton.vue'
    import PaymentMethodBox from './PaymentMethodBox.vue'

    @Component({
        name: "payment_method",
        layout: 'checkout',
        components: {
            AppButton,
            PaymentMethodBox
        }
    })
    export default class PaymentMethod extends Vue {
    }
</script>

<style lang="less" scoped>
  @import "../../../assets/variables";

  .heading {
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 12px 0 24px;
    padding: 8px 16px;
    border-bottom: 4px solid @SECONDARY_BORDER_COLOR;

    &__caption {
      line-height: 1.15;
      box-sizing: border-box;
      border-bottom: 2px solid @PRIMARY_BORDER_COLOR;
      padding: 12px 6px;
      margin-bottom: 24px;
      letter-spacing: 1px;
      font-size: .72rem;
      color: #8d8d8d;
      text-transform: uppercase;
    }
  }

  .button {
    margin: 64px auto;
  }
</style>
