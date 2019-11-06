<template>
  <AuthForm />
</template>

<script lang="ts">
    import {Component, Watch, Vue} from 'vue-property-decorator'
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
        get user(): any {
            return this.$store.getters['user/getUser']
        }

        @Watch('user')
        onUserChange(user: any) {
            if (user) this.$router.replace('/');
        }
    }
</script>
