<script lang="ts" setup>
import StayCard from './StayCard.vue'
const props = defineProps<{
    StayList: Number;
}>();

</script>

<template>
    <div v-for="card in StayList">
        <StayCard />
    </div>
</template>

<style scoped lang="scss">

</style>