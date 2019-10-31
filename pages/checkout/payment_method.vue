<template>
  <div>
    <div class="heading">Payment method</div>
    <div class="heading__caption">Selected payment method</div>

    <div class="list-item-row">
      <div class="checkout-list-item-left">
        <div class="checkout-payment-card-number">
          **** **** **** {{ card.last4 }}
        </div>
        <div class="checkout-payment-method-card-name">John Doe</div>
      </div>
      <div class="checkout-list-item-right">
        <div class="checkout-payment-card-exp-date">
          {{ card.exp_month }} / {{ card.exp_year }}
        </div>
        <div class="checkout-list-item-mark">&#10003;</div>
      </div>
    </div>

    <AppButton class="button"
               @click="$router.push('/checkout/delivery_address')" title="next"/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import AppButton from '~/components/AppButton.vue'

    @Component({
        name: "payment_method",
        layout: 'checkout',
        components: {
            AppButton
        }
    })
    export default class PaymentMethod extends Vue {
        card: any = {
            last4: 4242,
            exp_month: 10,
            exp_year: 2020
        }
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

  .list-item-row {
    display: flex;
    flex-direction: row;
    padding: 16px 24px;
    border: 2px solid @SECONDARY_BORDER_COLOR;
    border-radius: 12px;
    position: relative;
    letter-spacing: 1px;
    transition: all 250ms ease-in;
    margin-top: 16px;
    &:hover {
      transition: all 250ms ease-in;
      cursor: pointer;
      box-shadow: 0 0 20px -11px rgba(0, 0, 0, 0.75);
    }
  }

  .checkout-list-item-left {
    display: flex;
    flex-direction: column;
    flex: 11;
    & > div {
      padding: 12px 0;
    }
    & .checkout-address-city {
      display: flex;
      flex-direction: row;
      & > div:last-child {
        padding: 0 12px;
      }
    }
  }
  .checkout-list-item-right {
    display: flex;
    flex-direction: column;
    flex: auto;
    align-items: flex-end;
    justify-content: center;
    & > div {
      padding: 12px 0;
    }
    & .checkout-list-item-mark {
      font-size: 40px;
      color: @SECONDARY_BORDER_COLOR;
      padding-right: 12px;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>
