<script>
import {reactive, ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'

import axios from 'axios'

export default {
    setup() {
        const form = reactive({
            title: '',
            content: '',
        })

        function getPost() {
            axios.get(`${import.meta.env.VITE_CORGI_URL}/admin/posts/${route.params.slug}`, {withCredentials: true})
                .then(res => {
                    form.title = res.data.title,
                    form.content = res.data.content
                })
        }

        function updatePost() {
            axios.post(`${import.meta.env.VITE_CORGI_URL}/admin/posts`, {
                form
            }, {withCredentials: true})
                .then(res => {
                })
        }

        onMounted(() => {
            getPost()
        })

        return {
            form,
            updatePost
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="createPost" class="w-1/2 mx-auto shadow-lg border-grey-50 border rounded mt-10 p-4">
            <p class="font-semibold text-gray-700 mb-4 text-xl">New Post</p>
            <div class="flex flex-col my-4">
                <label for="title">Title</label>
                <input type="title" name="title" id="title" v-model="form.title" class="border border-grey-700 rounded p-1">
            </div>
            <div class="flex flex-col my-4">
                <label for="content">Content</label>
                <input type="content" name="content" id="content" v-model="form.content" class="border border-grey-700 rounded p-1">
            </div>
            <div class="flex flex-col my-4">
                <button type="submit" class="text-white bg-blue-500 hover:bg-blue-400 rounded py-2">Create</button>
            </div>
        </form>
    </div>
</template>