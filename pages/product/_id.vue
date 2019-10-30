<template>
  <div v-if="product" class="product-wrapper">
    <div class="product-image-container">
      <div class="product-image-inner-container show-product">
        <div><img :src="product.image['public_url']" :alt="`${product.name}-img`"/></div>
      </div>
    </div>

    <div class="product-description-container">
      <div class="product-description show-product">
        <div class="product-description-top">
          <div class="product-title-container">
            <span class="product-title">{{ product.name }}</span>
            <span class="product-subtitle">{{ product['short_description'] }}</span>
            <span v-if="product['discount'] > 0" class="product-discounted-price">
          {{ product.price }} {{ product.currency }}
        </span>

            <span class="product-price">
          <span v-if="product['discount'] > 0" class="product-new-price-title">new price</span>
          {{ product['final_price'] }} {{ product.currency }}
        </span>
          </div>
          <div class="product-description-content">
            {{ product.description }}
          </div>
          <div class="product-id">
            Article id: <span>{{product['human_id'] }}</span>
          </div>
        </div>
        <div class="add-to-cart-button-container">
          <AppButton @click.native='addToCart(product)'
                     :title="productInCart ? 'Remove From Cart' : 'Add to Cart'"/>
        </div>
      </div>
    </div>

    <AppNotify ref="notify" />
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import AppButton from "~/components/AppButton.vue";
    import AppNotify from "~/components/AppNotify.vue";

    @Component({
        name: 'ProductPage',
        components: {AppButton, AppNotify},
        async fetch({store, params}) {
            await store.dispatch('fetchProduct', params.id)
        }
    })
    export default class ProductPage extends Vue {
        get product(): any {
            return this.$store.getters.getProduct
        }

        get productInCart(): any[] {
            return this.$store.getters.getCart.find((product: any) => this.product.id === product.id)
        }

        addToCart(product: any): void {
            if (this.productInCart) {
                this.$store.dispatch('removeProductFromCart', product)
                    .then(() => {
                        (this.$refs.notify as any).openNotify({
                            message: `${product.name} removed from your cart`
                        })
                    })
            } else {
                this.$store.dispatch('addProductToCart', product)
                    .then(() => {
                        (this.$refs.notify as any).openNotify({
                            message: `${product.name} successfully added to your cart`
                        })
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/variables";

  .product-wrapper {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-self: stretch;
    overflow: hidden;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      width: 200%;
      height: 100%;
      background-color: @TERTIARY_BACKGROUND;
      z-index: 0;
      transform: translateX(32%) skew(-32deg);
    }
    & .product-description-container {
      flex: 1;
      flex-direction: column;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      & .product-description-top {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      & .product-id {
        transform: translateX(80px);
        margin-top: 32px;
        letter-spacing: 1px;
        align-self: flex-start;
        font-size: 1.06rem;
        & > span {
          font-size: 1.08rem;
          text-decoration: underline;
        }
      }

      & .product-description-content {
        max-width: 65%;
        transform: translateX(-40px);
        margin-top: 32px;
        font-size: 1.06rem;
        letter-spacing: 1px;
      }
      & .product-sizes-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 380px;
        margin-top: 48px;
        transform: translateX(-120px);
      }
      & .product-description {
        color: @PRIMARY_TEXT;
        min-width: 30vw;
        max-width: 80%;
        min-height: 60vh;
        padding: 36px;
        align-items: center;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        &:before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background-color: @PRIMARY_BACKGROUND;
          transform: translateX(-10vw) skew(-27deg);
          z-index: 0;
        }

        &.hide-product {
          display: none;
        }
        & > div {
          z-index: 1;
        }

        & .add-to-cart-button-container {
          margin-top: 48px;
          transform: translateX(-240px);
        }

        & .product-title-container {
          z-index: 4;
          & .product-title {
            font-size: 2.4rem;
            letter-spacing: 1px;
          }
          & .product-subtitle {
            margin-left: 24px;
            color: @SECONDARY_TEXT;
            font-size: 1.4rem;
            letter-spacing: 1px;
          }

          & .product-discounted-price {
            text-decoration: line-through;
            font-size: 1rem;
            margin: 0 12px 0 48px;
          }

          & .product-price {
            font-size: 1.8rem;
            position: relative;
            & .product-new-price-title {
              position: absolute;
              font-size: 0.66rem;
              right: 0;
              top: -12px;
              letter-spacing: 1px;
              color: @ALTERNATIVE_TEXT
            }
          }
        }
      }
    }

    & .product-image-container {
      flex: 1;
      flex-direction: column;
      display: flex;
      position: relative;
      z-index: 1;

      & .product-image-inner-container {
        flex: 1;
        display: flex;
        justify-content: center;

        & > div {
          max-width: 30vw;
          align-self: center;
        }

        &.hide-product {
          display: none;
        }
        & div > img {
          width: 100%;
          height: 100%;
        }
      }
    }

    & .similar-products-container {
      flex: 1;
      align-self: stretch;
      display: flex;
      flex-direction: column;
      max-width: 50vw;
      min-height: 460px;
      z-index: 2;
      position: relative;

      & .similar-products-title-container {
        display: flex;
        flex-direction: row;
        align-self: stretch;
        padding: 0 48px;
      }
    }
  }

  @media all and (max-width: 1280px) {
    .product-wrapper {
      flex-direction: column;
      & .product-image-container {
        flex-basis: auto;
        & .product-image-inner-container {
          & > div {
            max-width: 75vw;
          }
        }
      }

      & .product-description-container {
        & .product-description {
          max-width: 100%;
          &:before {
            transform: translateX(15vw) skew(-35deg);
          }

          & .product-description-content {
            max-width: 100%;
            transform: translateX(0)
          }

          & .add-to-cart-button-container {
            transform: translateX(0);
          }

          & .product-id {
            transform: translateX(0);
            align-self: center;
          }
        }
        & .product-sizes-container {
          transform: translateX(0);
        }
      }
    }
  }

  @media all and (max-width: 1280px) {
    .product-wrapper {
      &:before {
        display: none;
      }

      & .product-description-container {
        flex: 1 50%;
      }
    }
  }

  @media all and (max-width: 720px) {
    .product-wrapper {
      & .similar-products-container {
        min-height: 340px;
        z-index: 1;
      }
      & .product-description-container {
        & .product-description {
          &:before {
            transform: translateX(0) skew(-5deg);
          }
        }
      }
    }
  }

</style>
