<template>
  <div class="top-header-title-container">
    <svg width="82" height="36" x="0px" y="0px" viewBox="0 0 753.24 190.98">
      <rect x="351.3" class="st0" width="34.72" height="63.18"/>
      <path style="fill: #FB6B40" d="M63.62,156.35c-15.99,0-28.99-13.01-28.99-28.99H0c0,35.08,28.54,63.62,63.62,63.62s63.62-28.54,63.62-63.62
      H92.62C92.62,143.34,79.61,156.35,63.62,156.35z"/>
      <rect x="409.02" y="63.18" style="fill: #FB6B40" width="34.64" height="63.18"/>
      <rect x="235.89" y="63.18" style="fill: #FB6B40" width="34.64" height="63.18"/>
      <rect x="625.89" y="126.35" style="fill: #FB6B40" width="34.64" height="63.18"/>
      <rect x="293.65" y="126.35" style="fill: #FB6B40" width="34.64" height="63.18"/>
      <polygon style="fill: #1A172F"
               points="443.85,0 409.12,0 409.12,34.72 409.16,34.72 409.16,63.18 472.34,63.18 472.34,34.72 443.85,34.72"/>
      <polygon style="fill: #1A172F" points="0.07,64.08 0.07,127.25 34.57,127.25 34.57,64.08 34.57,0.9 0.07,0.9"/>
      <path style="fill: #1A172F" d="M547.95,155.35c-15.99,0-28.99-13.01-28.99-28.99h-34.63c0,35.08,28.54,63.62,63.62,63.62
      s63.62-28.54,63.62-63.62h-34.63C576.95,142.34,563.94,155.35,547.95,155.35z"/>
      <rect x="143.28" y="63.18" style="fill: #1A172F" width="34.64" height="63.18"/>
      <path style="fill: #1A172F" d="M689.62,62.73c-35.08,0-63.62,28.54-63.62,63.62h34.63c0-15.99,13.01-28.99,29-28.99
      c15.99,0,28.99,13.01,28.99,28.99h34.63C753.24,91.27,724.7,62.73,689.62,62.73z"/>
      <rect x="293.65" y="63.18" style="fill: #1A172F" width="34.64" height="63.18"/>
      <rect x="351.3" y="126.35" style="fill: #1A172F" width="34.72" height="63.18"/>
      <rect x="293.61" style="fill: #AA9AF0" width="34.72" height="34.72"/>
      <path style="fill: #AA9AF0" d="M206.91,155.35c-15.99,0-28.99-13.01-28.99-28.99h-34.63c0,35.08,28.54,63.62,63.62,63.62
      c35.08,0,63.62-28.54,63.62-63.62H235.9C235.9,142.34,222.9,155.35,206.91,155.35z"/>
      <path style="fill: #AA9AF0" d="M547.95,62.83c-35.08,0-63.62,28.54-63.62,63.62h34.63c0-15.99,13.01-28.99,28.99-28.99
      s28.99,13.01,28.99,28.99h34.63C611.57,91.37,583.03,62.83,547.95,62.83z"/>
      <path style="fill: #AA9AF0"
            d="M443.65,126.35h-34.63c0,35.08,28.54,63.62,63.62,63.62v-34.63C456.66,155.35,443.65,142.34,443.65,126.35z"/>
      <rect x="718.5" y="126.35" style="fill: #AA9AF0" width="34.64" height="63.18"/>
      <rect x="351.3" y="63.18" style="fill: #AA9AF0" width="34.72" height="63.18"/>
      <path style="fill: #AA9AF0" d="M63.62,63.73C28.54,63.73,0,92.27,0,127.35h34.63c0-15.99,13.01-28.99,28.99-28.99s28.99,13.01,28.99,28.99
      h34.63C127.25,92.27,98.7,63.73,63.62,63.73z"/>
    </svg>
    <div class="demo-store-title">
      <span><span class="Builton gradient-text">Builton</span> <span class="Extrawest">Extrawest</span></span>

      <span><span class="VueJS">VueJS</span> <span class="demo">Demo</span> <span>Store</span></span>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({})
    export default class BuiltOnLogo extends Vue {
    }
</script>

<style lang="less" scoped>
  .top-header-title-container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    .demo-store-title {
      display: flex;
      flex-direction: column;
      margin-left: 12px;
      color: rgb(127, 127, 127);
      text-transform: uppercase;
      font-size: 0.75rem;
    }

    span {
      transform: scaleY(1.3);
    }

    .Builton, .Extrawest {
      font-weight: bold;
      color: #836de9;
      display: inline-block;
      margin-bottom: 6px;
    }

    .Builton {
      background: linear-gradient(#AA9AF0, #F66B40);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #F66B40;
    }

    .Extrawest {
      color: #facc29;
    }

    .VueJS {
      color: #35976b;
    }

    .demo {
      padding: 0 3px;
    }
  }

  @media all and (max-width: 480px) {
    .top-header-title-container {
      .demo-store-title {
        display: none;
      }
    }
  }
</style>
