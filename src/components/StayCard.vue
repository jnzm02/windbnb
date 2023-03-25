<script lang="ts" setup>
const props = defineProps<{
    data: Object
}>();

</script>

<template>
    <img class='card-img' :src="data.photo" alt="stays_image">
    <div class="card">
        <div class="description">
            <div class="host" v-if="data.superHost">
                SUPER HOST
            </div>
            {{ data.type }}
        </div>
        <div class="rating">
            <img src="@/components/icons/star.svg" alt="">
            {{ data.rating }}
        </div>
    </div>
    <div class="title">
        {{ data.title }}
    </div>
</template>

<style scoped lang="scss">
.card-img {
    margin-top: 32px;
    width: 100%;
    aspect-ratio: 1.468;
    border-radius: 24px;
}
.card {
    margin: 15px 0 12px;
    gap: 4px;
    display: flex;
    justify-content: space-between;
    .description {
        display: flex;
        align-items: center;
        font-size: 14px;
        .host {
            font-family: "Monsterrat", sans-serif;
            font-weight: 700;
            padding: 6px 10px;
            border-radius: 12px;
            border: 1px solid #4F4F4F;
            color: #4F4F4F;
            font-size: 12px;
            line-height: 15px;
            margin-right: 12px;
        }
    }
    .rating {
        display: flex;
        align-items: center;
        gap: 4px;
        img {
            width: 16px;
            height: 16px;
        }
    }
}
.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    margin-bottom: 15px;
}
</style>