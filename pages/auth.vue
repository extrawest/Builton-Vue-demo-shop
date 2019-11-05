<template>
  <div class="form-wrapper">
    <div class="form">
      <label class="label">
        <input type="text"
               autofocus
               placeholder="Email"
               v-model="email">
      </label>

      <label class="label">
        <input type="text"
               autofocus
               placeholder="Password"
               v-model="password1">
      </label>

      <label v-if="!loginMode" class="label">
        <input type="text"
               autofocus
               placeholder="Confirm password"
               v-model="password2">
      </label>

      <AppButton class="button" :title="loginMode ? 'log in' : 'register'"/>

      <div @click="loginMode = !loginMode" class="toggle">{{!loginMode ? 'LOG IN' : 'REGISTER'}}</div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import AppButton from '~/components/AppButton.vue'

    @Component({
        layout: 'empty',
        name: 'AppAuth',
        components: {
            AppButton
        }
    })
    export default class AppAuth extends Vue {
        email: string = '';
        password1: string = '';
        password2: string = '';

        loginMode: boolean = true;
    }
</script>

<style lang="less" scoped>
  @import "../assets/variables";

  .form-wrapper {
    position: relative;
    z-index: 1;
    width: 288px;
    max-height: 288px;
    margin: 64px auto;
    overflow: visible;
    &:before {
      position: absolute;
      top: -5%;
      bottom: -15%;
      right: -15%;
      left: -15%;
      display: block;
      content: '';
      background-color: rgba(@PRIMARY_BACKGROUND, .8);
      transform: skew(-32deg);
    }
  }

  .form {
    min-height: 100%;
    position: relative;
    z-index: 1;
  }

  .label {
    display: block;
    margin: 8px 8px 24px;

    input {
      width: 100%;
      padding: 8px;
      border: none;
      border-bottom: 2px solid @PRIMARY_BORDER_COLOR;
      outline: none;
      background-color: transparent;
      transition: .3s;

      &:focus {
        outline: none;
        border-bottom: 2px solid @SECONDARY_BORDER_COLOR;
      }
    }
  }

  .button {
    margin: auto;
  }

  .toggle {
    width: 120px;
    margin: 32px auto 16px;
    text-align: center;
    cursor: pointer;
    color: #8d8d8d;
    font-size: .78rem;
    letter-spacing: 1px;
    transition: .2s;

    &:after {
      display: block;
      content: '';
      width: 100%;
      margin-top: 4px;
      height: 2px;
      background-color: @TERTIARY_BORDER_COLOR;
      transform: scaleX(0);
      transform-origin: center center;
      transition: .2s;
    }

    &:hover {
      color: #111;
      &:after {
        transform: scaleX(1);
      }
    }
  }
</style>
