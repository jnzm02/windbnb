<script setup lang="ts">
const props = defineProps<{
    placeholder: string;
}>();
</script>
<template>
    <input type="text" :placeholder="props.placeholder">
</template>

<style langs="scss">
input {
    height: 55px;
    border: 1px solid transparent;
    border-radius: 16px;
    padding: 0 10px;
    font-family: 'Muli', sans-serif;
    font-size: 14px;
    line-height: 18px;
}
::placeholder {
    color: #BDBDBD;
}
</style>