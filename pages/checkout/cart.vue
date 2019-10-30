<template>
  <div class="checkout">
    <div v-if="cart.length" class="checkout-items">
      <div class="items-header">Your items</div>
      <div class="table">
        <div class="table-row table-header">
          <div class="col brand-col">Brand</div>
          <div class="col name-col">Model</div>
          <div class="col price-col">Price</div>
          <div class="col remove-col"></div>
        </div>

        <div v-for="product in cart" :key="product.id" class="table-row">
          <div class="col brand-col">{{ product.brand }}</div>
          <nuxt-link :to="{path: `/product/${product.id }`}" tag="div" class="col name-col">
            {{ product.name }}
          </nuxt-link>
          <div class="col price-col">{{ product['final_price'] }} {{ product.currency }}</div>
          <div class="col remove-col" @click="removeProduct(product)">
            <RemoveIcon/>
          </div>
        </div>

        <div class="table-row total">
          <div>Total</div>
          <div>{{totalPrice}} {{cart[0].currency}}</div>
        </div>
      </div>
    </div>

    <div v-if="!cart.length" class="empty-bag">
      <BuiltOnLogo />
      <p>The cart is empty</p>
      <nuxt-link to="/">Keep shopping</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import RemoveIcon from '~/components/RemoveIcon.vue'
    import BuiltOnLogo from '~/components/BuiltOnLogo.vue'

    @Component({
        name: 'CheckoutCart',
        layout: 'checkout',
        components: {
            RemoveIcon,
            BuiltOnLogo
        }
    })
    export default class CheckoutCart extends Vue {
        get cart(): any [] {
            return this.$store.getters.getCart
        }

        get totalPrice(): number {
            return this.cart.reduce((acc, prod) => acc + prod['final_price'], 0)
        }

        removeProduct(prod: any): void {
            this.$store.dispatch('removeProductFromCart', prod)
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/variables";

  .checkout {
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

  .empty-bag {
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

  .checkout-items {
    margin-bottom: 16px;
  }

  .items-header {
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 12px 0 24px;
    padding: 8px 16px;
    border-bottom: 4px solid @SECONDARY_BORDER_COLOR;
  }

  .table {
    box-sizing: border-box;
    padding: 12px 4px;

    .table-row {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      font-size: .78rem;
      letter-spacing: 1px;
      cursor: pointer;
      transition: .25s ease-in;
      padding: 6px 12px;

      &.table-header {
        align-items: center;
        padding: 0 12px 12px;
        border-bottom: 1px solid @PRIMARY_BORDER_COLOR;
        margin-bottom: 24px;
        pointer-events: none;
      }

      &.total {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 12px;
        margin-top: 24px;
        pointer-events: none;
        border-top: 1px solid @PRIMARY_BORDER_COLOR;
      }

      &:hover {
        background-color: @SECONDARY_BACKGROUND;
        transition: all 250ms ease-in;
      }

      & > div {
        padding: 8px 6px;
        font-size: 0.92rem;
      }
    }
  }

  .brand-col {
    text-transform: capitalize;
    flex-shrink: 0;
    width: 20%;
  }

  .name-col {
    flex-shrink: 0;
    width: 50%;
  }

  .price-col {
    flex-shrink: 0;
    width: 20%;
  }

  .remove-col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 10%;
  }

  @media (max-width: 600px) {
    .brand-col {
      display: none;
    }

    .name-col {
      width: 60%;
    }

    .price-col {
      width: 25%;
    }

    .remove-col {
      min-width: 15%;
    }
  }

  @media (max-width: 780px) {
    .checkout {
      padding: 24px 16px;
      overflow: hidden;
    }
  }
</style>
