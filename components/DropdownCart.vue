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
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path fill="#c5c5c5"
                    d="M.71 1.83c-.39.39-.39 1.02 0 1.41l3.68 3.68 2.21 4.66-1.35 2.45c-.19.33-.28.73-.24 1.15.1 1.06 1.06 1.82 2.12 1.82h7.33l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84l2.13 2.13c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L2.12 1.83c-.39-.39-1.02-.39-1.41 0zM7 15l1.1-2h2.36l2 2H7zm9.05-2.06c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4H7.12l8.93 8.94zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="header-checkout-container">
      <div v-if="!cart.length" class="empty-bag-container">Cart is empty</div>
      <div v-if="cart.length" class="header-checkout-container">
        <AppButton disabled @click="$router.push('/checkout/bag')" title="Proceed to checkout"/>

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

    @Component({
        components: {AppButton}
    })
    export default class DropdownCart extends Vue {
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
  @import "../assets/variables";

  .cart-container {
    position: absolute;
    top: 47px;
    right: 0;
    width: 100vw;
    max-width: 480px;
    min-width: 288px;
    background-color: #fff;
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

        &:hover > svg {
          & > path {
            &:last-child {
              fill: rgba(0, 0, 0, 0.84);
            }
          }
        }
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
