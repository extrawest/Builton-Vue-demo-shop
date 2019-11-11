<template>
  <div class="cart-container" @mouseenter="$emit('showCart')" @mouseleave="$emit('hideCart')">
    <div v-if="cart.length">
      <div class="products" v-for="product in cart" :key="product.id">
        <div class="product">
          <div class="product__name">{{product.name}}</div>
          <div class="product__price">
            {{ product['final_price'] }} {{ product.currency }}
          </div>
          <div @click="removeProduct(product)" class="remove-item">
            <RemoveIcon/>
          </div>
        </div>
      </div>
    </div>

    <div class="header-checkout-container">
      <div v-if="!cart.length" class="empty-bag-container">Cart is empty</div>
      <div v-if="cart.length" class="header-checkout-container">
        <AppButton @click="$router.push('/checkout/cart')" title="Proceed to checkout"/>

        <div class="header-bag-amount">
          {{totalPrice}} EUR
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import AppButton from "~/components/AppButton.vue";
    import RemoveIcon from '~/components/RemoveIcon.vue'

    @Component({
        components: {AppButton, RemoveIcon}
    })
    export default class DropdownCart extends Vue {
        get cart(): any [] {
            return this.$store.getters.getCart;
        }

        get totalPrice(): number {
            return this.cart.reduce((acc, prod) => acc + prod['final_price'], 0);
        }

        removeProduct(prod: any): void {
            this.$store.dispatch('removeProductFromCart', prod);
        }
    }
</script>

<style lang="less" scoped>
  @import "../assets/variables";

  .cart-container {
    position: absolute;
    top: 47px;
    right: 0;
    width: 100vw;
    max-width: 480px;
    min-width: 288px;
    background-color: @PRIMARY_BACKGROUND;
    border: 1px solid @PRIMARY_BORDER_COLOR;

    .product {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 0.72rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 2px 0;
      min-height: 42px;
      padding: 0 16px;
      color: @SECONDARY_TEXT;
      cursor: pointer;
      transition: all 150ms ease;
      z-index: 5;

      &__name {
        flex-grow: 1;
      }

      &__price {
        padding: 0 16px;
        flex-shrink: 0;
      }

      .remove-item {
        padding: 12px;
      }

      &:hover {
        background-color: @SECONDARY_BACKGROUND;
        transition: all 150ms ease;
      }
    }

    .header-checkout-container {
      margin: 12px 0;
      padding: 0 8px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .empty-bag-container {
        padding: 12px 24px;
        font-size: 0.82rem;
        color: @SECONDARY_TEXT;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      & .header-bag-amount {
        color: @ALTERNATIVE_TEXT;
        font-size: 1.08rem;
        text-align: center;
      }
    }
  }
</style>
