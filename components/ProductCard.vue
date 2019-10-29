<template>
  <div class="product-container" @click="$router.push(`/product/${product.id}`)">
    <div v-if="product['discount'] > 0" class="product-discount-container">- {{ product['discount'] * 100 }}} %</div>

    <img class="category-image"
         :src="product.image['public_url']"
         :alt="`${product.name} image`"/>

    <div class="product-description">
      <div class="product-description-inner-container">
        <div>{{ product.name }}</div>
        <div :class="{'discounted-product': product['discount'] > 0}">{{ product['short_description'] }}</div>
      </div>
      <div class="product-price-container">
          <span v-if="product['discount'] > 0" class="discounted-product">
            {{ product.price }} {{ product.currency }}
          </span>
        {{ product['final_price'] }} {{ product.currency }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component({})
    export default class ProductCard extends Vue {
        @Prop() product!: any;
    }
</script>

<style lang="less" scoped>
  @import "../assets/variables";

  .product-container {
    padding: 12px;
    margin: 26px;
    min-height: 294px;
    background-color: @PRIMARY_BACKGROUND;
    border: 1px solid @PRIMARY_BORDER_COLOR;
    display: flex;
    flex-direction: column;
    -webkit-transition: all 250ms ease-in;
    -moz-transition: all 250ms ease-in;
    -o-transition: all 250ms ease-in;
    transition: all 250ms ease-in;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
      -webkit-box-shadow: 2px 0 19px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 2px 0 19px -7px rgba(0, 0, 0, 0.75);
      box-shadow: 2px 0 19px -7px rgba(0, 0, 0, 0.75);
      -webkit-transform: translate3d(0, -12px, 1);
      -moz-transform: translate3d(0, -12px, 0);
      -o-transform: translate3d(0, -12px, 0);
      -ms-transform: translate3d(0, -12px, 0);
      transform: translate3d(0, -12px, 0);
      -webkit-transition: all 250ms ease-out;
      -moz-transition: all 250ms ease-out;
      -o-transition: all 250ms ease-out;
      transition: all 250ms ease-out;
    }

    & .product-discount-container {
      position: absolute;
      right: -140px;
      top: 5%;
      width: 100%;
      height: 50px;
      background-color: @POSITIVE_BACKGROUND;
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transform: rotate(45deg);
      color: @TERTIARY_TEXT;
      text-shadow: 0 0 5px #000000;
      letter-spacing: 1px;
      font-size: 1.2rem;
    }

    & .product-description {
      display: flex;
      flex-direction: row;
      padding: 0 1rem;

      & .product-description-inner-container {
        display: flex;
        flex-direction: column;
        line-height: 26px;

        & div {
          font-size: 1.1rem;
          letter-spacing: 1px;

          &.discounted-product {
            max-width: 120px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        & div:last-child {
          font-size: 0.92rem;
        }
      }

      & .product-price-container {
        align-items: center;
        letter-spacing: 1px;
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: flex-end;
        min-width: 86px;
        font-size: 1.2rem;
        color: @PRIMARY_TEXT;

        & .discounted-product {
          text-decoration: line-through;
          font-size: 0.86rem;
          padding-top: 4px;
          margin-right: 12px;
        }
      }
    }

    & > img {
      width: 100%;
      height: 100%;
    }
  }
</style>
