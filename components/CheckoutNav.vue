<template>
  <div class="nav">
    <div class="line"></div>
    <div class="step"
         v-for="({label, path}, index) in steps"
         :class="{
          'current': currentPath === path,
          'passed': index <= steps.findIndex(e => e.path === currentPath)
          }"
         :key="path">
      <nuxt-link :to="'/checkout/' + path" class="ball"/>
      <span class="label">{{label}}</span>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Watch, Vue} from 'vue-property-decorator'

    @Component({})
    export default class CheckoutNav extends Vue {
        @Prop() steps!: any[];

        get currentPath(): string {
            const {path = ''} = this.$route;
            return path.split('/').pop() || '';
        }

        @Watch('currentPath')
        onPahChange(newVal: string) {
          this.setProgress(newVal);
        }

        mounted() {
            this.setProgress(this.currentPath);
        }

        setProgress(path: string): void {
            const line: HTMLElement | null = document.querySelector('.line');
            const index: number = this.steps.findIndex(e => e.path === path);
            const px: string = `${index * 58}px`;
            const bg = `linear-gradient(90deg, #0af ${px}, #99d9ff ${px})`;

            if (line) line.style.background = bg;
        }
    }
</script>

<style lang="less" scoped>
  @import "../assets/variables";

  .nav {
    position: relative;
    display: flex;
    width: 288px;
    margin: 0 auto;
    padding: 16px 0;
    border-radius: 14px;
    background-color: rgba(@PRIMARY_BACKGROUND, .5);

    .line {
      position: absolute;
      top: 28px;
      left: 24px;
      width: 240px;
      height: 4px;
      background: linear-gradient(90deg, #0af 58px, #99d9ff 58px);
    }
  }

  .step {
    flex-basis: 20%;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ball {
      width: 28px;
      height: 28px;
      background-color: @POSITIVE_LIGHT;
      border-radius: 50%;
      cursor: pointer;
      transition: .3s;
      transform: scale(.6);
      pointer-events: none;
    }

    .label {
      padding-top: 4px;
      color: @SECONDARY_TEXT;
      font-size: 12px;
      text-align: center;
      transition: .3s;
    }

    &.passed {
      .label {
        color: @PRIMARY_TEXT;
      }

      .ball {
        background-color: @POSITIVE_STATUS;
        pointer-events: all;
      }
    }

    &.current {
      .ball {
        transform: scale(1.05);
      }
    }
  }
</style>
