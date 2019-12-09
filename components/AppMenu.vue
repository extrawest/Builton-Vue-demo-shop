<template>
  <div class="main-menu-container" @mouseleave="() => hideCart() || hideAccount()">
    <div class="top-header-menu-container">
      <a class="header-box-hyperlink" href="https://builton.dev" target="_blank"><span>Website</span></a>

      <a class="header-box-hyperlink" href="https://docs.builton.dev" target="_blank"><span>Docs</span></a>
      <a class="header-box-hyperlink" href="https://dashboard.builton.dev/" target="_blank"><span>Dashboard</span></a>
      <a class="header-box-hyperlink" href="https://github.com/BuiltonDev/builton-demo-store" target="_blank"><span>Github</span></a>

      <div class="header-box-hyperlink header-dropdown" @mouseenter="showCart">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path fill="#111"
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        {{ cart.length }}
      </div>

      <div class="header-box-hyperlink header-dropdown" @mouseenter="showAccount">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path fill="#111" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
        </svg>
      </div>
    </div>

    <DropdownCart @hideCart="hideCart" @showCart="showCart" v-if="cartIsShown"/>
    <DropdownAccount @hideAccount="hideAccount" @showAccount="showAccount" v-if="accountIsShown"/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import AppButton from '~/components/AppButton.vue';
    import DropdownCart from '~/components/DropdownCart.vue';
    import DropdownAccount from '~/components/DropdownAccount.vue';

    @Component({
        components: {
            AppButton,
            DropdownCart,
            DropdownAccount
        }
    })
    export default class AppMenu extends Vue {
        cartIsShown: boolean = false;
        accountIsShown: boolean = false;

        get cart(): any [] {
            return this.$store.getters.getCart;
        }

        showCart(): void {
            this.cartIsShown = true;
            this.accountIsShown = false;
        }

        hideCart(): void {
            this.cartIsShown = false;
        }

        showAccount(): void {
            this.accountIsShown = true;
            this.cartIsShown = false;
        }

        hideAccount(): void {
            this.accountIsShown = false;
        }
    }
</script>

<style lang="less" scoped>
  @import '../assets/variables';

  .main-menu-container {
    display: flex;
    align-self: stretch;
    position: relative;

    .dropdown-container {
      position: relative;
      padding-right: 62px;
      display: flex;
      flex-direction: row;
    }

    & .bag-product-row {
      display: flex;
      flex-direction: row;
      flex: 1;
      align-items: center;
      justify-content: space-between;

      & > div {
        flex: 0;
        min-width: 80px;
      }

      & > div:first-child {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 210px;
        padding: 0 12px 0 0;
      }

      & .remove-bag-item {
        flex: 0;
        overflow-x: visible;
        min-width: auto;
      }
    }

    & .header-checkout-container {
      margin: 12px 0;
      border-top: 1px solid @PRIMARY_BORDER_COLOR;
      display: flex;
      flex-direction: row;
      padding: 24px 24px 0;
      justify-content: space-between;
      align-items: center;

      & .header-bag-amount {
        margin-right: 32px;
        color: @ALTERNATIVE_TEXT;
        font-size: 1.08rem;
        letter-spacing: 1px;
      }
    }

    .top-header-menu-container {
      display: flex;
      align-self: stretch;
      position: relative;
    }

    .header-box-hyperlink {
      padding: 0 16px;
      text-decoration: none;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      transition: all 250ms;
      font-size: 0.82rem;
      border: none;
      cursor: pointer;
      border-left: 1px solid @PRIMARY_BORDER_COLOR;
      color: @SECONDARY_TEXT;
      background-color: @PRIMARY_BACKGROUND;

      &.header-dropdown {
        padding: 0 32px;
        opacity: .7;
        color: #000;
        font-size: 16px;

        svg {
          margin-right: 4px;
        }
      }

      &:last-child {
        border-right: 1px solid @PRIMARY_BORDER_COLOR;
      }

      &:hover {
        transition: all 250ms;
        background-color: @SECONDARY_BACKGROUND;
      }

      &.cart {
        font-size: 1rem;

        & > span {
          display: flex;
          flex-direction: row;
        }

        .cart-count {
          margin-left: 6px;
          align-self: center;
        }
      }
    }

    & .menu-button-container {
      & .menu-button {
        cursor: pointer;
        padding: 12px;
      }
    }

    & .responsive-menu {
      display: none;
      position: absolute;
      width: 100%;
      max-width: 420px;
      z-index: 99998;
      top: 54px;
      left: 0;
      height: calc(100% - 54px);
      content: '';
      background-color: white;
      flex-direction: column;
      padding: 24px 0 64px;
      overflow: hidden;
      justify-content: space-between;

      &.responsive-menu-open {
        display: flex;
        animation: open-menu 450ms forwards;
      }

      &.responsive-menu-closed {
        display: none;
      }

      & .header-box-hyperlink {
        border: none;
        padding: 12px 24px;
        font-size: 1.06rem;
        background-color: transparent;
      }

      & .internal-menu-items {
        & .header-title {
          color: @SECONDARY_TEXT;
          font-size: 0.86rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0 24px 12px;
          padding: 24px 0 12px;
          border-bottom: 1px solid @PRIMARY_BORDER_COLOR;
        }
      }

      & .external-menu-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        &:before {
          position: absolute;
          top: -100px;
          content: '';
          width: 200%;
          height: 400%;
          z-index: 1;
          background-color: @TERTIARY_BACKGROUND;
          transform: skew(-20deg) rotate(-10deg);
        }

        & > div {
          position: relative;
          z-index: 2;
          padding: 12px 0;

          &:before {
            position: absolute;
            content: '';
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 0;
            transition: all 250ms ease-in-out;
            height: 2px;
            background-color: @PRIMARY_BACKGROUND;
          }

          &:hover {
            &:before {
              width: 60%;
              transition: all 250ms ease-in-out;
            }
          }

          & > a {
            text-decoration: none;
            color: @TERTIARY_TEXT;
            font-size: 0.86rem;
            display: block;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
        }
      }
    }

    & .responsive-menu-backdrop {
      position: absolute;
      z-index: 99997;
      content: '';
      background-color: rgba(0, 0, 0, 0.06);
      width: 100%;
      height: calc(100% - 54px);
      top: 54px;
      left: 0;
      display: none;

      &.backdrop-open {
        display: block;
      }
    }

    & .responsive-actions-container {
      display: none;
      flex-direction: row;

      & .header-box-hyperlink {
        &.cart {
          border: none;
        }
      }
    }
  }


  @media all and (max-width: 780px) {
    .header-container {
      flex-direction: row;
      height: 54px;
      padding: 0 12px;
      justify-content: space-between;

      .header-box-hyperlink:not(.header-dropdown) {
        display: none;
      }

      & .responsive-actions-container {
        display: flex;
        flex-direction: row;

        & .header-box-hyperlink {
          background-color: transparent;

          &.cart {
            border: none;
          }
        }
      }
    }

    .main-menu-container {
      & .responsive-menu {
        max-width: 320px;
      }

      & .header-checkout-container {
        & .header-bag-amount {
          margin: 0;
        }
      }

      & .bag-product-row {
        & > div {
          padding: 0 8px;
        }

        & > div:first-child {
          max-width: 120px;
        }
      }
    }
  }
</style>
