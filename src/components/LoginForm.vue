<template>
    <form @submit.prevent="handleSubmit">
        <label></label>
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <button>Log in</button>
    </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(email, password)
        }

        return { email, password, handleSubmit }
    }
}
</script>

<style></style>