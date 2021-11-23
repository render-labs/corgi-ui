<script>
import {reactive, ref, onMounted} from 'vue'

import axios from 'axios'

export default {
    setup() {
        const form = reactive({
            name: '',
            email: '',
            username: '',
            password: ''
        })

        function register() {
            axios.post(`${import.meta.env.VITE_CORGI_URL}/register`, form, {withCredentials: true})
                .then(res => {
                })
        }

        return {form, register}
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="register" class="w-1/3 mx-auto shadow-lg border-grey-50 border rounded mt-10 p-4">
            <p class="font-semibold text-gray-700 mb-4 text-xl">Register</p>
            <div class="flex flex-col my-4">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="form.name" class="border border-grey-700 rounded p-1">
            </div>
            <div class="flex flex-col my-4">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" v-model="form.username" class="border border-grey-700 rounded p-1">
            </div>
            <div class="flex flex-col my-4">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="form.email" class="border border-grey-700 rounded p-1">
            </div>
            <div class="flex flex-col my-4">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="form.password" class="border border-grey-700 rounded p-1">
            </div>
            <div class="flex flex-col my-4">
                <button type="submit" class="text-white bg-blue-500 hover:bg-blue-400 rounded py-2">Register</button>
            </div>
        </form>
    </div>
</template>