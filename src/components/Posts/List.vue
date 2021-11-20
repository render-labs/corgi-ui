<script setup>
import Item from './Item.vue'

export default {
    props: {
        posts: {
            type: Array
        }
    },
    setup(props) {

    }
}
</script>

<template>
    <div v-if="posts.length">
        <Item v-for="(index, post) in posts" :key="index" :post="post" />
    </div>
    <div v-else>
        <p>No posts to show</p>
    </div>
</template>