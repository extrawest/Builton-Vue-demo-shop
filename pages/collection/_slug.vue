<template>
  <div>
    <div class="product-list-grid">
      <ProductCard v-for="product in products"
                   :key="product.id"
                   :product="product" />
    </div>
    <div v-if="hasNextPage" class="product-list-load-more-container">
      <AppButton @click="$store.dispatch('fetchNextPage')" title="Load more" />
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import AppButton from '~/components/AppButton.vue'
    import ProductCard from '~/components/ProductCard.vue'

    @Component({
        name: 'ProductCollection',
        components: {
            AppButton,
            ProductCard
        },
        async fetch({store, params}) {
            await store.dispatch('fetchProducts', params.slug)
        }
    })
    export default class ProductCollection extends Vue {
        get products(): any[] {
            return this.$store.getters.getProducts
        }
        get hasNextPage(): boolean {
            // return this.$store.getters.getProductsTotalCount > this.products.length
            return false
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/variables";

  .product-list-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    position: relative;
  }

  .product-list-load-more-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 62px 0 32px;
  }

  .product-list-grid {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
    align-items: start;
    padding: 0 2rem;
  }

  @media all and (max-width: 780px) {
    .product-list-wrapper {
      min-height: 100vh;
    }
    .product-list-grid {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      grid-gap: 2rem;
      align-items: start;
      padding: 0 12px;
    }
  }

</style>
