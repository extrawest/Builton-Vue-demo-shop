<template>
  <div class="home-popular-products-container">
    <div class="home-popular-products-title-container">
      <div class="section-header-container sub">Most popular products</div>
    </div>
    <div class="carousel"></div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({})
    export default class MostPopular extends Vue {
    }
</script>

<style lang="less" scoped>
  @import '../assets/variables';

  .home-popular-products-container {
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    min-height: 460px;
    background-color: @PRIMARY_BACKGROUND;
    padding: 0 64px;
    margin: 32px 0 64px;
    z-index: 2;
    position: relative;

    & > .carousel-container {
      width: 100%;
    }
  }

  .section-header-container {
    &.main {
      font-size: 1.6rem;
      margin: 12px 0 24px 0;
      padding: 8px 16px;
      letter-spacing: 1px;
      border-bottom: 4px solid @SECONDARY_BORDER_COLOR;
    }

    &.sub {
      border-bottom: 2px solid @PRIMARY_BORDER_COLOR;
      padding: 12px 6px;
      margin-bottom: 24px;
      letter-spacing: 1px;
      font-size: 0.72rem;
      color: @SECONDARY_TEXT;
      text-transform: uppercase;
    }
  }

  @media all and (max-width: 780px) {
    .section-header-container {
      &.sub {
        margin: 24px;
      }
    }
  }


  @media all and (max-width: 1280px) {
    .home-popular-products-container {
      padding: 0;

      & .home-popular-products-title-container {
        margin: 0 32px;
      }
    }
  }

  @media all and (max-width: 720px) {
    .home-popular-products-container {
      min-height: 320px;
    }
  }
</style>
