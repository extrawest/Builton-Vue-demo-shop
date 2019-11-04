<template>
  <div>
    <ProductList editable />

    <div v-if="!cart.length" class="empty-bag">
      <BuiltOnLogo />
      <p>The cart is empty</p>
      <nuxt-link to="/">Keep shopping</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import BuiltOnLogo from '~/components/BuiltOnLogo.vue'
    import ProductList from './ProductList.vue'

    @Component({
        name: 'cart',
        layout: 'checkout',
        components: {
            ProductList,
            BuiltOnLogo
        }
    })
    export default class CheckoutCart extends Vue {
        get cart(): any [] {
            return this.$store.getters.getCart || []
        }
    }
</script>

<style lang="less" scoped>
  @import "../../../assets/variables";

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
</style>
