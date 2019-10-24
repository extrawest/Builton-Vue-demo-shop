<template>
  <div @click="$router.push(`collection/${category.name.toLowerCase()}`)">
    <div v-if="category" class="category-container" :class="[`${category.name}-container`]">
      <div class="category-title" :class="[`${category.name}-title`]">
        {{ category.name }}
      </div>
      <AppSpinner v-if="!loaded"/>
      <img class="category-image"
           :class="{'loaded': loaded}"
           @load="onLoad"
           :src="category.image['public_url']"
           :alt="`${category.name} image`"/>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import AppSpinner from '~/components/AppSpinner.vue'

    @Component({
        components: {
            AppSpinner
        }
    })
    export default class ImageCategory extends Vue {
        loaded: boolean = false;
        @Prop() category!: any;

        onLoad(): void {
            this.loaded = true
        }
    }
</script>

<style lang="less" scoped>
  @import '../assets/variables';

  .category-container {
    height: auto;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &.Adidas-container {
      width: 25vw;
    }

    &.Nike-container {
      width: 35vw;
    }

    &.Puma-container {
      width: 35vw;
    }

    @media all and (max-width: 720px) {
      &.Adidas-container {
        width: 90vw;
      }

      &.Nike-container {
        width: 90vw;
      }

      &.Puma-container {
        width: 90vw;
      }
    }
  }

  .category-title {
    position: absolute;
    color: white;
    font-size: 1.2rem;
    text-shadow: 0 1px 2px #000000;
    letter-spacing: 1px;
    z-index: 1;

    &.Adidas-title {
      left: 16px;
      top: 16px;
    }

    &.Nike-title {
      right: 16px;
      top: 16px;
    }

    &.Puma-title {
      left: 16px;
      bottom: 16px;
    }
  }

  .category-image {
    width: 100%;
    opacity: 0;
    transition: 500ms;
    transform: scale(1) translateZ(1px);

    &.loaded {
      opacity: 1;
    }

    &:hover {
      transform: scale(1.04) translateZ(1px);
    }
  }
</style>
