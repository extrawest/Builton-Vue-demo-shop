<template>
  <div>
    <div class="heading">Selected delivery address</div>
    <div class="list-item-row">
      <p>{{ address }}</p>
      <div class="mark">✓</div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({})
    export default class AddressBox extends Vue {
        get address(): string | undefined {
            return this.$store.getters.getOrder.address
        }
    }
</script>

<style lang="less" scoped>
  @import "../../../assets/variables";

  .heading {
    box-sizing: border-box;
    line-height: 1.15;
    border-bottom: 2px solid @PRIMARY_BORDER_COLOR;
    padding: 12px 6px;
    margin: 24px 0;
    letter-spacing: 1px;
    font-size: .72rem;
    color: #8d8d8d;
    text-transform: uppercase;
  }

  .list-item-row {
    display: flex;
    flex-direction: row;
    padding: 16px 24px;
    border: 2px solid @SECONDARY_BORDER_COLOR;
    background-color: rgba(@PRIMARY_BACKGROUND, .7);
    border-radius: 12px;
    position: relative;
    letter-spacing: 1px;
    transition: all 250ms ease-in;
    margin-top: 16px;

    .mark {
      margin-top: auto;
      margin-left: auto;
      line-height: 1.15;
      font-weight: 300;
      letter-spacing: 1px;
      cursor: pointer;
      box-sizing: border-box;
      font-size: 40px;
      color: @SECONDARY_BORDER_COLOR;
    }

    &:hover {
      transition: all 250ms ease-in;
      cursor: pointer;
      box-shadow: 0 0 20px -11px rgba(0, 0, 0, 0.75);
    }
  }
</style>
