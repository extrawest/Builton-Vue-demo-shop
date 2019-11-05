<template>
  <div class="empty-container">
    <BuiltOnLogo class="logo" @click.native="$router.push('/')"/>
    <div class="wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import BuiltOnLogo from '~/components/BuiltOnLogo.vue'

    @Component({
        components: {
            BuiltOnLogo
        }
    })
    export default class EmptyLayout extends Vue {
    }
</script>

<style lang="less">
  @import "../assets/variables";

  .logo {
    margin: 32px auto;
    cursor: pointer;
  }

  .empty-container {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &:before,
    &:after {
      position: absolute;
      content: "";
      width: 200%;
      height: 100%;
      right: 100%;
      bottom: -40%;
      background-color: @ORANGE_BACKGROUND;
    }

    &:before {
      transform: translateX(35%) skew(70deg);
    }

    &:after {
      background-color: @TERTIARY_BACKGROUND;
      right: -150%;
      bottom: 0;
      z-index: 0;
      transform: skew(-32deg);
    }
  }

  @media (max-width: 780px) {
    .wrapper {
      padding: 24px 16px;
      overflow: hidden;
    }
  }
</style>
