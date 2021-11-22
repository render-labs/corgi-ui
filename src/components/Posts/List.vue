<script>
import {ref, watch} from 'vue'

import Item from './Item.vue'

export default {
    props: {
        posts: Array
    },
    components: {
        Item
    },
}
</script>

<template>
    <div v-if="posts">
        <Item v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
    <div v-else>
        <p>No posts to show</p>
    </div>
</template>