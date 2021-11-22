<script setup>
import {reactive, ref, onMounted} from 'vue'

import axios from 'axios'

const form = reactive({
    name: '',
    email: '',
    username: '',
    password: ''
})

function register() {
    axios.post(`${import.meta.env.VITE_CORGI_URL}/register`, form)
        .then(res => {
        })
}
</script>

<template>
    <div>
        <form @submit.prevent="register">
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
            </div>
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password">
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</template>