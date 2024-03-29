<template>
  <button
    :disabled="false"
    :type='type'
    :class='className'
    @click="$emit('click')"
  >
    <AppSpinner v-if="loading"/>
    <span v-else>{{ title }}</span>
  </button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import AppSpinner from '~/components/AppSpinner.vue'

    @Component({
        components: {
            AppSpinner
        }
    })
    export default class AppButton extends Vue {
        @Prop({default: 'submit'}) type!: string;
        @Prop({default: 'button'}) className!: string;
        @Prop({default: 'press'}) title!: string;

        loading: boolean = false;
    }
</script>

<style lang="less" scoped>
  @import "../assets/variables";

  .button {
    min-width: 120px;
    max-width: 220px;
    display: flex;
    justify-content: center;
    margin: 0 1em;
    padding: 0.8em 1.2em;
    border: none;
    background: none;
    color: @TERTIARY_TEXT;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.76rem;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    height: 48px;
    border: 2px;
    align-items: center;

    &.round {
      border-radius: 40px;
    }

    &:focus {
      outline: none;
    }

    & > span {
      vertical-align: middle;
      padding-left: 0.35em;
    }
    &:hover {
      color: @SECONDARY_BUTTON_BACKGROUND;
    }

    &::before,
    &::after {
      content: "";
      z-index: -1;
      border-radius: inherit;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
      transition: transform 0.3s, opacity 0.3s;
      -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &::before {
      border: 2px solid @SECONDARY_BUTTON_BACKGROUND;
      opacity: 0;
      -webkit-transform: scale3d(1.2, 1.2, 1);
      transform: scale3d(1.2, 1.2, 1);
    }

    &::after {
      background: @SECONDARY_BUTTON_BACKGROUND;
      border: 2px solid @SECONDARY_BUTTON_BACKGROUND;
      color: @SECONDARY_BUTTON_BACKGROUND;
    }

    &.selected {
      color: @SECONDARY_BUTTON_BACKGROUND;
      &::before {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
      &::after {
        opacity: 0;
        -webkit-transform: scale3d(0.8, 0.8, 1);
        transform: scale3d(0.8, 0.8, 1);
      }
    }

    &:hover::before {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    &:hover::after {
      opacity: 0;
      -webkit-transform: scale3d(0.8, 0.8, 1);
      transform: scale3d(0.8, 0.8, 1);
    }
  }

</style>
