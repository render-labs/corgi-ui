<script setup>
import {reactive, ref, onMounted} from 'vue'

import axios from 'axios'

import PostsList from '../Posts/List.vue'

export default {
    setup() {
        const posts = ref([])

        function getPosts() {
            axios.get(`${import.meta.env.VITE_CORGI_URL}/posts`)
                .then(res => {
                    posts.value = res.data.posts
                })
        }

        onMounted(() => {
            getPosts()
        })

        return {
            posts
        }
    },
}
</script>

<template>
    <PostsList :posts="post"/>
</template>