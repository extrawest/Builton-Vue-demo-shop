<template>
    <div class="account-container" @mouseenter="$emit('showAccount')" @mouseleave="$emit('hideAccount')">
      <AppButton @click="$router.push('/auth')" title="Log in / sign up"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import AppButton from '~/components/AppButton.vue';

    @Component({
        components: {
            AppButton
        }
    })
    export default class DropdownAccount extends Vue {
    }
</script>

<style lang="less" scoped>
  @import "../assets/variables";

  .account-container {
    position: absolute;
    top: 47px;
    right: 0;
    width: 288px;
    display: flex;
    justify-content: center;
    padding: 12px 0;
    background-color: @PRIMARY_BACKGROUND;
    border: 1px solid @PRIMARY_BORDER_COLOR;
  }
</style>
