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
    height: 100%;
    background-color: @PRIMARY_BACKGROUND;
    padding: 0 64px;
    margin: 32px 0 64px;
    z-index: 2;
    position: relative;

    & .carousel {
      flex-grow: 1;
      background-image:
        repeating-linear-gradient(
          45deg,
          rgba(251, 107, 64, 0.1),
          rgba(251, 107, 64, 0.1) 10px,
          transparent 10px,
          transparent 20px,
          rgba(170, 154, 240, 0.2) 20px,
          rgba(170, 154, 240, 0.2) 30px,
          transparent 30px,
          transparent 40px
        );
    }
  }

  .section-header-container {
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
