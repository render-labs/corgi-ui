<script setup>
import {reactive, ref, onMounted} from 'vue'

import axios from 'axios'

export default {
    setup() {
        const form = reactive({
            email: '',
            password: ''
        })

        function login() {
            axios.post(`${import.meta.env.VITE_CORGI_URL}/login`, form)
                .then(res => {
                    
                })
        }

        return {
            form, login
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="login">
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="form.email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="form.password">
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>