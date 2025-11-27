<script setup lang="ts">

const props = defineProps<{
    modelValue: string
    label?: string
    placeholder?: string
    type?: string
}>()

const emit = defineEmits(["update:modelValue"]);

</script>

<template>
    <div class="mb-2">
        <label v-if="label" class="block mb-1 text-sm">{{ label }}</label>
        <input :type="type || 'text'" :placeholder="placeholder" class="border rounded px-3 py-2 w-full"
            :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </div>
</template>