<script>
export default {
    props: {
        posts: {
            type: Object
        }
    }
}
</script>

<template>
    <div class="py-2" v-for="(post, index) in posts" :key="index">
        <router-link :to="`/blog/${post.slug}`">
            <p class="text-2xl font-bold mb-2">{{post.title}}</p>
        </router-link>
        
    </div>
</template>