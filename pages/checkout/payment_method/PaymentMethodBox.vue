<template>
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
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component({})
    export default class PaymentMethodBox extends Vue {
        get card(): any {
            return this.$store.getters.getOrder.card
        }
    }
</script>

<style lang="less" scoped>
  @import "../../../assets/variables";

  .list-item-row {
    display: flex;
    flex-direction: row;
    padding: 16px 24px;
    border: 2px solid @SECONDARY_BORDER_COLOR;
    background-color: rgba(@PRIMARY_BACKGROUND, .7);
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
