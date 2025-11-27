<script setup lang="ts">
</script>

<template>
    <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" v-bind="$attrs">
        <slot />
    </button>
</template>
