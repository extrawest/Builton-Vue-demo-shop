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
    import { Component, Vue } from 'vue-property-decorator'
    import AppHeader from '~/components/AppHeader.vue'
    import AppFooter from '~/components/AppFooter.vue'

    @Component({
        components: {
            AppHeader,
            AppFooter
        }
    })
    export default class DefaultLayout extends Vue {}
</script>

<style lang="less">
  @import '../assets/variables';

  @media all and (max-width: 720px) {
    .wrapper {
      flex-direction: column;
    }
  }
</style>
