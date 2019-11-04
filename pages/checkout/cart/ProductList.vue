<template>
  <div v-if="cart.length" class="checkout-items" :class="{'editable': editable}">
    <div v-if="editable" class="items-header">Your items</div>
    <div class="table">
      <div v-if="editable" class="table-row table-header">
        <div class="col brand-col">Brand</div>
        <div class="col name-col">Model</div>
        <div class="col price-col">Price</div>
        <div class="col remove-col"></div>
      </div>

      <div v-for="product in cart" :key="product.id" class="table-row">
        <div class="col brand-col">{{ product.brand }}</div>

        <nuxt-link v-if="editable" :to="{path: `/product/${product.id }`}" tag="div" class="col name-col">
          {{ product.name }}
        </nuxt-link>
        <div v-if="!editable" class="col name-col">
          {{ product.name }}
        </div>

        <div class="col price-col">{{ product['final_price'] }} {{ product.currency }}</div>
        <div v-if="editable" class="col remove-col" @click="removeProduct(product)">
          <RemoveIcon/>
        </div>
      </div>

      <div class="table-row total">
        <div>Total</div>
        <div>{{totalPrice}} {{cart[0].currency}}</div>
      </div>
    </div>

    <AppButton v-if="editable"
               class="button"
               @click="$router.push('/checkout/auth')"
               title="Next"/>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import RemoveIcon from '~/components/RemoveIcon.vue'
    import AppButton from '~/components/AppButton.vue'

    @Component({
        components: {
            AppButton,
            RemoveIcon
        }
    })
    export default class ProductList extends Vue {
        @Prop({default: true}) editable!: boolean;

        get cart(): any [] {
            return this.$store.getters.getCart || []
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
  @import "../../../assets/variables";

  .button {
    margin: 32px auto;
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
      transition: .25s ease-in;
      cursor: default;
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

      &.editable:hover {
        background-color: @SECONDARY_BACKGROUND;
        transition: all 250ms ease-in;
        cursor: pointer;
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
</style>
