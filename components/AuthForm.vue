<template>
  <div class="form-wrapper">
    <div class="form">
      <label class="label">
        <input type="email"
               autofocus
               placeholder="Email"
               v-model="email">
        <span v-if="emailError">{{emailError}}</span>
      </label>

      <label class="label">
        <input type="password"
               autofocus
               placeholder="Password"
               v-model="password1">
        <span v-if="password1Error">{{password1Error}}</span>
      </label>

      <label v-if="!loginMode" class="label">
        <input type="password"
               autofocus
               placeholder="Confirm password"
               v-model="password2">
        <span v-if="password2Error">{{password2Error}}</span>
      </label>

      <AppButton @click="validate" class="button" :title="loginMode ? 'log in' : 'register'"/>

      <div @click="loginMode = !loginMode" class="toggle">{{!loginMode ? 'LOG IN' : 'REGISTER'}}</div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator'
    import AppButton from '~/components/AppButton.vue'

    @Component({
        components: {
            AppButton
        }
    })
    export default class AuthForm extends Vue {
        email: string = '';
        password1: string = '';
        password2: string = '';
        loginMode: boolean = true;
        emailError: string = '';
        password1Error: string = '';
        password2Error: string = '';

        @Watch('email')
        onEmailChange() {
            this.emailError = '';
        }

        @Watch('password1')
        onPassword1Change() {
            this.password1Error = '';
        }

        @Watch('password2')
        onPassword2Change() {
            this.password2Error = '';
        }

        validate(): void {
            if (!/\S+@\S+\.\S+/.test(this.email)) {
                this.emailError = 'Email is not valid';
            }

            if (this.password1.length < 5) {
                this.password1Error = 'At least 5 characters required';
            }

            if (!this.loginMode && this.password2.length < 5) {
                this.password2Error = 'At least 5 characters required';
            }

            if (!this.loginMode && this.password1 !== this.password2) {
                this.password2Error = 'Passwords do not match';
            }

            if (this.emailError || this.password1Error || this.password2Error) return;

            this.emailError = '';
            this.password1Error = '';
            this.password2Error = '';
            this.submit();
        }

        submit(): void {
            this.$emit('submit');
            console.log('valid')
        }
    }
</script>

<style lang="less" scoped>
  @import "../assets/variables";

  .form-wrapper {
    position: relative;
    z-index: 1;
    width: 288px;
    max-height: 320px;
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
    position: relative;
    display: block;
    padding: 8px 8px 24px;

    span {
      position: absolute;
      bottom: 0;
      left: 8px;
      font-size: .78rem;
      color: @NEGATIVE_TEXT;
    }

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
    margin: 24px auto;
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