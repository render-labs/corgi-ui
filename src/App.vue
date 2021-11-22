<script setup>
</script>

<template>
    <div class="py-4 w-full flex items-center">
        <router-link to="/" class="mr-4">Home</router-link>

        <div class="flex items-center justify-end w-full">
            <router-link to="/blog" class="mx-4">Blog</router-link>
            <!-- <router-link to="/register" class="mx-4">Register</router-link> -->
        </div>
    </div>
    
    <router-view></router-view>
</template>

<style>
#app {
    @apply px-12;
}
</style>