<script lang="ts" setup>
import StayCard from './StayCard.vue'

interface StayCardData {
  photo: string;
  superHost: boolean;
  type: string;
  title: string;
  rating: number;
}

const props = defineProps<{
    data: StayCardData[];
}>();

</script>

<template>
    <div v-for="card in data">
        <StayCard :data="card" />
    </div>
</template>

<style scoped lang="scss">

</style>