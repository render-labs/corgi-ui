<script>
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'

import axios from 'axios'

export default {
    setup() {
        const post = ref('')
        const route = useRoute()

        function getPost() {
            axios.get(`${import.meta.env.VITE_CORGI_URL}/posts/${route.params.slug}`)
                .then(res => {
                    post.value = res.data
                })
        }

        onMounted(() => {
            getPost()
        })

        return {post}
    },
}
</script>

<template>
    <div>
        <p class="text-4xl font-bold my-8">{{post.title}}</p>
        <p class="text-gray-800">{{post.content}}</p>
    </div>
</template>