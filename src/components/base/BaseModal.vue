<script setup lang="ts">

const props = defineProps<{
    modelValue: boolean
    title?: string
}>()

const emit = defineEmits(["update:modelValue", "close"])

const closeModal = () => {
    emit("update:modelValue", false)
    emit("close")
}
</script>

<template>
    <div v-if="modelValue" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <!-- Fondo clickeable -->
        <div class="absolute inset-0" @click="closeModal"></div>

        <!-- Contenido -->
        <div class="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-10">
            <header class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">
                    {{ title }}
                </h2>
                <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
                    ✕
                </button>
            </header>

            <div>
                <slot />
            </div>
        </div>
    </div>
</template>
