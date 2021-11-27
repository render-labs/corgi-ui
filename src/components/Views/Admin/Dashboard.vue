<script>
import {reactive, ref, onMounted} from 'vue'

import axios from 'axios'

import PostsList from '../../Admin/Posts.vue'

export default {
    components: {
        PostsList
    },
    setup() {
        const posts = ref([])

        function getPosts() {
            axios.get(`${import.meta.env.VITE_CORGI_URL}/admin/posts`, {withCredentials: true})
                .then(res => {
                    posts.value = res.data
                })
        }

        onMounted(() => {
            getPosts()
        })

        return {
            posts
        }
    }
}
</script>

<template>
    <PostsList :posts="posts"/>
</template>