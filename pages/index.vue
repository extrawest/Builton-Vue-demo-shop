<template>
  <div>
    <div class="home-wrapper">
      <div class="background-left-fragment"></div>

      <div class="left-category-wrapper">
        <ImageCategory category="adidas" />
      </div>
      <div class="inner-wrapper">
        <ImageCategory category="nike" />
        <ImageCategory category="puma" />
      </div>
    </div>
    <MostPopular/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import ImageCategory from '~/components/ImageCategory.vue'
    import MostPopular from '~/components/MostPopular.vue'

    @Component({
        components: {
            ImageCategory,
            MostPopular
        }
    })
    export default class HomePage extends Vue {
    }
</script>

<style lang="less" scoped>
  @import '../assets/variables';

  .home-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 48px);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    overflow: hidden;

    &:before {
      position: absolute;
      content: '';
      width: 200%;
      height: 100%;
      background-color: @TERTIARY_BACKGROUND;
      left: 50%;
      transform: translateX(10%) skew(-50deg);
    }

    & .background-left-fragment {
      &:before {
        position: absolute;
        content: '';
        width: 200%;
        height: 100%;
        background-color: @ORANGE_BACKGROUND;
        right: 100%;
        bottom: -20%;
        transform: translateX(5%) skew(70deg);
      }
    }

    & > div:not(:last-child) {
      padding: 12px 24px;
    }

    & .inner-wrapper {
      & > div {
        padding: 12px 48px;
      }
    }

    .second-wrapper {
      display: flex;
      flex-direction: column;
    }
  }

  @media all and (max-width: 720px) {
    .home-wrapper {
      flex-direction: column;

      & > div:not(:last-child) {
        padding: 12px 0;
      }

      & .inner-wrapper {
        & > div {
          padding: 12px 0;
        }
      }
    }
  }
</style>
