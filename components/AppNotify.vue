<template>
  <transition name="notify">
    <div v-if="showNotify" class="notify" :class="[`notify--${type}`]">
      <div class="notify__message">{{ message }}</div>
      <button @click="showNotify = false" class="notify__button" type="button">✖</button>
    </div>
  </transition>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({})
    export default class AppNotify extends Vue {
        showNotify: boolean = false;
        type: string = '';
        message: string = '';
        delay: number = 0;
        timer: any = null;

        openNotify(opts: any): void {
            if (this.timer) {
                this.showNotify = false;
                clearTimeout(this.timer);
            }

            this.$nextTick(() => {
                this.type = opts.type || 'info';
                this.message = opts.message || 'Product successfully added to your bag';
                this.delay = opts.delay || 4000;
                this.showNotify = true;

                this.timer = setTimeout(() => {
                    this.showNotify = false
                }, this.delay)
            })
        }
    }
</script>

<style lang="less" scoped>
  .notify-enter-active, .notify-leave-active {
    transition: .3s;
  }
  .notify-enter, .notify-leave-to {
    transform: translateX(150%);
  }

  .notify {
    position: fixed;
    display: flex;
    align-items: center;
    top: 1em;
    right: 1em;
    min-height: 48px;
    padding: 8px;
    width: 320px;
    box-sizing: border-box;
    color: #fff;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.1), 0 2px 15px 0 rgba(0,0,0,.05);
    z-index: 9999;

    &--info {
      background: #3498db;
    }

    &--success {
      background: #07bc0c;
    }

    &--warning {
      background: #f1c40f;
    }

    &--error {
      background: #e74c3c;
    }

    &__button {
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      background: transparent;
      outline: none;
      border: none;
      padding: 0;
      margin-left: 8px;
      cursor: pointer;
      opacity: 0.7;
      transition: 0.3s ease;
      align-self: flex-start;
      &:hover {
        opacity: 1;
      }
    }
  }
</style>
