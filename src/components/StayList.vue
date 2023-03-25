<script lang="ts" setup>
import StayCard from './StayCard.vue'
const props = defineProps<{
    data: Object;
}>();

</script>

<template>
    <div v-for="card in data">
        <StayCard :data="card" />
    </div>
</template>

<style scoped lang="scss">

</style>