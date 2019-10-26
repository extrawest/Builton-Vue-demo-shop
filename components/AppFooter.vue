<template>
  <div class="footer">
    <div class="home-footer-content">
      <div class="home-footer-col">
        <div class="home-footer-col-title">
          Quick links
        </div>
        <div class="home-footer-col-content">
          <div>
            <a><span>Link</span></a>
          </div>
          <div>
            <a><span>Link</span></a>
          </div>
          <div>
            <a><span>Link</span></a>
          </div>
          <div>
            <a href="#"><span>Link</span></a>
          </div>
        </div>
      </div>
      <div class="home-footer-col">
        <div class="home-footer-col-title">
          Menu
        </div>
        <div class="home-footer-col-content">
          <button>
            <span>
<!--              <span>Sign up/in</span>-->
            </span>
          </button>
        </div>
      </div>
      <div class="home-footer-col">
        <div class="home-footer-col-title">
          About
        </div>
        <div class="home-footer-col-content">
          <div>
            This is a DEMO to showcase Builton.dev API functionality. The
            products, prices, payment method, checkout process and its
            affiliates are fictional. No charges and deliveries will be made.
            made. For more information please check
            <a href="https://builton.dev" target="_blank">
              Builton.dev
            </a>
            website.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppFooter extends Vue {}
</script>

<style lang="less" scoped>
@import url('../assets/variables');

.footer {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 120px 0 60px;
  & > div {
    padding: 24px 32px;
    color: @TERTIARY_TEXT;
    z-index: 3;
    font-style: italic;
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.12);
  }
  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 2vh;
    width: 102%;
    height: 200%;
    transform: rotate(-2deg);
    background-color: @TERTIARY_BACKGROUND;
    z-index: 2;
  }
  &:after {
    position: absolute;
    content: '';
    left: -40px;
    top: 4vh;
    width: 102%;
    height: 200%;
    transform: rotate(3deg);
    z-index: 1;
    background-color: @ORANGE_BACKGROUND;
  }
}

.home-footer-content {
  display: flex;
  flex-direction: row;
  padding: 12px 32px;
  flex: 1;

  & .home-footer-col {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-self: flex-start;
    color: @TERTIARY_TEXT;
    margin: 0 24px;

    & .home-footer-col-title {
      border-bottom: 2px solid @PRIMARY_BACKGROUND;
      padding: 0 12px 6px;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }

    & .home-footer-col-content {
      & > div {
        padding: 6px 12px;
        letter-spacing: 1px;

        & > a {
          text-decoration: none;
          color: @TERTIARY_TEXT;
          -webkit-transition: all 250ms ease-in-out;
          -moz-transition: all 250ms ease-in-out;
          -o-transition: all 250ms ease-in-out;
          transition: all 250ms ease-in-out;

          &:hover {
            opacity: 0.82;
            -webkit-transition: all 250ms ease-in-out;
            -moz-transition: all 250ms ease-in-out;
            -o-transition: all 250ms ease-in-out;
            transition: all 250ms ease-in-out;
          }
        }
      }

      & > button {
        border: none;
        padding: 6px 12px;
        background-color: transparent;
        color: @TERTIARY_TEXT;
        -webkit-transition: all 250ms ease-in-out;
        -moz-transition: all 250ms ease-in-out;
        -o-transition: all 250ms ease-in-out;
        transition: all 250ms ease-in-out;
        letter-spacing: 1px;
        cursor: pointer;

        &:hover {
          opacity: 0.82;
          -webkit-transition: all 250ms ease-in-out;
          -moz-transition: all 250ms ease-in-out;
          -o-transition: all 250ms ease-in-out;
          transition: all 250ms ease-in-out;
        }
      }
    }
  }
}

@media all and (max-width: 720px) {
  .home-footer-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 36px;

    & .home-footer-col {
      align-self: stretch;
      margin: 24px 0;

      & .home-footer-col-title {
        text-align: center;
      }

      & .home-footer-col-content {
        text-align: center;
      }
    }
  }
}
</style>
