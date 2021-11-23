<script>
import {reactive, ref, onMounted} from 'vue'

import axios from 'axios'

export default {
    setup() {
        const form = reactive({
            email: '',
            password: ''
        })

        function login() {
            axios.post(`${import.meta.env.VITE_CORGI_URL}/login`, form, {withCredentials: true})
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
        <form @submit.prevent="login" class="w-1/3 mx-auto shadow-lg border-grey-50 border rounded mt-10 p-4">
            <p class="font-semibold text-gray-700 mb-4 text-xl">Login</p>
            <div class="flex flex-col my-4">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="form.email" class="border border-grey-700 rounded p-1">
            </div>
            <div class="flex flex-col my-4">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="form.password" class="border border-grey-700 rounded p-1">
            </div>
            <div class="flex flex-col my-4">
                <button type="submit" class="text-white bg-blue-500 hover:bg-blue-400 rounded py-2">Login</button>
            </div>
        </form>
    </div>
</template>