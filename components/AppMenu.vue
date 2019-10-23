<template>
    <div>
      <AppButton />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import AppButton from '~/components/AppButton.vue';

    @Component({
        components: {
            AppButton
        }
    })
    export default class AppMenu extends Vue {}
</script>

<style lang="less" scoped></style>
