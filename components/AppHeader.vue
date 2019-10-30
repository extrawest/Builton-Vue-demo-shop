<template>
  <div class="header-container">
    <div class="header-logo-container">
    <BuiltOnLogo @click.native="$router.push('/')" />
  </div>
  <AppMenu v-if="!hideMenu" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BuiltOnLogo from '~/components/BuiltOnLogo.vue'
import AppMenu from '~/components/AppMenu.vue'

@Component({
    components: {
        BuiltOnLogo,
        AppMenu
    }
})
export default class AppHeader extends Vue {
    @Prop({default: false}) hideMenu!: boolean;
}
</script>

<style lang="less" scoped>
  @import "../assets/variables";

  .header-container {
    height: 48px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;
    padding: 0 0 0 62px;
    background-color: white;
    z-index: 2;
    border-bottom: 1px solid @PRIMARY_BORDER_COLOR;
    & .header-logo-container {
      cursor: pointer;
    }
  }
</style>
