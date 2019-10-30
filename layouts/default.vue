<template>
  <div class="main-container">
    <AppHeader />
    <div class="wrapper">
      <nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import AppHeader from '~/components/AppHeader.vue'
    import AppFooter from '~/components/AppFooter.vue'

    @Component({
        components: {
            AppHeader,
            AppFooter
        }
    })
    export default class DefaultLayout extends Vue {
        $cookies: any;
        @Watch('$store.state.cart')
        async onCartChange(newVal: any) {
            this.$cookies.set('built-on-cart', newVal);
        }
    }
</script>
