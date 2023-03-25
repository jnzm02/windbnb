<script setup lang="ts">
const props = defineProps<{
    placeholder: string;
}>();
</script>
<template>
    <div class="input">{{ placeholder }}</div>
</template>

<style langs="scss">
.input {
    height: 55px;
    border: 1px solid transparent;
    border-radius: 16px;
    padding: 0 10px;
    font-family: 'Muli', sans-serif;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>