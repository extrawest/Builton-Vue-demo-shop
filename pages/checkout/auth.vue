<template>
  <AuthForm @submit="submit"/>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import AuthForm from '~/components/AuthForm.vue'

    @Component({
        name: 'CheckoutAuth',
        layout: 'checkout',
        middleware: 'checkAuth',
        components: {
            AuthForm
        }
    })
    export default class CheckoutAuth extends Vue {
        submit(): void {
            this.$router.replace('/checkout/payment_method')
        }
    }
</script>

<style lang="less" scoped>

</style>
