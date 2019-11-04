<template>
  <div>
    <div v-if="confirmed" class="confirmed">
      <BuiltOnLogo/>
      <p> This is a DEMO to showcase Builton.dev API functionality. The
        products, prices, payment method, checkout process and its
        affiliates are fictional. No charges and deliveries will be made.
        made. For more information please check <a href="https://builton.dev" target="_blank">Builton.dev</a>
        website.
      </p>
      <nuxt-link to="/">Keep shopping</nuxt-link>
    </div>

    <template v-if="!confirmed">
      <div class="heading">Order Overview</div>
      <ProductList :editable="false"/>

      <div class="heading__caption">Selected payment method</div>
      <PaymentMethodBox/>
      <AddressBox/>

      <AppButton @click="confirm" class="button" title="Place order"/>
    </template>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import ProductList from './cart/ProductList.vue'
    import PaymentMethodBox from './payment_method/PaymentMethodBox.vue'
    import AddressBox from './delivery_address/AddressBox.vue'
    import AppButton from '~/components/AppButton.vue'
    import BuiltOnLogo from '~/components/BuiltOnLogo.vue'

    @Component({
        name: 'confirmation',
        layout: 'checkout',
        components: {
            ProductList,
            PaymentMethodBox,
            AppButton,
            BuiltOnLogo,
            AddressBox
        }
    })
    export default class Confirmation extends Vue {
        private confirmed: boolean = false;

        confirm(): void {
            this.confirmed = true
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/variables";

  .confirmed {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    line-height: 1.15;
    letter-spacing: 1px;
    font-size: 1.12rem;
    color: @SECONDARY_TEXT;

    p {
      padding: 32px 0;
    }

    .nuxt-link-active {
      color: @POSITIVE_STATUS;
    }
  }

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
    margin: 32px 0 32px auto;
  }
</style>
