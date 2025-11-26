
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();

const isActive = (path: string) => {
    return route.path.startsWith(path)
    ? "bg-gray-200 dark:bg-gray-700 font-medium"
    : "";
};

interface NavItems {
    name: string,
    path: string,
}

const navItems: NavItems[] = [
    {name: "Contactos", path: "/contacts"},
    {name: "Actividades", path: "/activities"},
]

</script>

<template>
    <aside class="w-64 bg-white dark:bg-gray-800 border-r boder-gray-200 dark:border-gray-700 p-4">
        <h1 class="text-xl font-bold text-gray-700 dark:text-gray-200 mb-6">
            Mini CRM
        </h1>

        <nav>
            <ul class="flex flex-col gap-2">
                <li v-for="(link, index) in navItems" :key="index" >
                    <RouterLink
                    :to="link.path"
                    class="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    :class="isActive(link.path)"
                    >
                    {{ link.name }}
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>

</style>