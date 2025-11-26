
<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';


</script>

<template>
    <div class="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar/>
        <main class="flex-1 p-6">
            <RouterView/>
        </main>
    </div>
</template>

<style scoped>

</style>