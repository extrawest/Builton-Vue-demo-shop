<template>
  <AuthForm />
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import AppButton from '~/components/AppButton.vue'
    import AuthForm from '~/components/AuthForm.vue'

    @Component({
        layout: 'empty',
        name: 'AppAuth',
        components: {
            AppButton,
            AuthForm
        }
    })
    export default class AppAuth extends Vue {
    }
</script>
