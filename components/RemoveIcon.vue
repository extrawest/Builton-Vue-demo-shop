<template>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path fill="#c5c5c5" class="main"
          d="M.71 1.83c-.39.39-.39 1.02 0 1.41l3.68 3.68 2.21 4.66-1.35 2.45c-.19.33-.28.73-.24 1.15.1 1.06 1.06 1.82 2.12 1.82h7.33l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84l2.13 2.13c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L2.12 1.83c-.39-.39-1.02-.39-1.41 0zM7 15l1.1-2h2.36l2 2H7zm9.05-2.06c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4H7.12l8.93 8.94zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path>
  </svg>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({})
    export default class RemoveIcon extends Vue {
    }
</script>

<style lang="less" scoped>
  svg {
    .main {
      transition: .2s;
    }

    &:hover .main {
      fill: rgba(0, 0, 0, 0.84);
    }
  }
</style>
