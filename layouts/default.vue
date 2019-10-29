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
        onCartChange(newVal: any) {
            this.$cookies.set('built-on-cart', newVal);
        }
    }
</script>

<style lang="less">
  @import '../assets/variables';
  /*@sb: #03A9F4;
  @sb-bg: #B3E5FC;*/
  @sb: rgba(170, 154, 240, 1);
  @sb-bg: rgba(170, 154, 240, 0.42);

  html {
    scrollbar-face-color: @sb;
    scrollbar-shadow-color: @sb;
    scrollbar-highlight-color: @sb;
    scrollbar-3dlight-color: @sb;
    scrollbar-darkshadow-color: @sb;
    scrollbar-track-color: @sb-bg;
    scrollbar-arrow-color: #111;

    &::-webkit-scrollbar-thumb{
      background-color:  @sb;
    }
    &::-webkit-scrollbar{
      background-color: @sb-bg;
      width: 14px;
    }

    &{
      scrollbar-color: @sb @sb-bg;
      scrollbar-width: 14px;
    }
  }

  @media all and (max-width: 720px) {
    .wrapper {
      flex-direction: column;
    }
  }
</style>
