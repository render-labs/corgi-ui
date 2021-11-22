<script>
export default {
    props: {
        post: {
            type: Object
        }
    }
}
</script>

<template>
    <div class="py-2">
        <router-link :to="`/blog/${post.slug}`">
            <p class="text-2xl font-bold mb-2">{{post.title}}</p>
            <p class="text-base text-gray-700 truncate">{{post.title}}</p>
        </router-link>
        
    </div>
</template>