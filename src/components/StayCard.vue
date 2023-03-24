<script lang="ts" setup>
// const props = defineProps<{
//     title: string;
//     description: string;
//     rating: number;
//     isSuperHost: boolean;
//     image: string;
// }>();

const data = {
    isSuperHost: true,
    description: "Entire house",
    rating: 4.73,
}

</script>

<template>
    <img class='card-img' src="@/components/images/room1.jpg" alt="room">
    <div class="card">
        <div class="description">
            <div class="host" v-if="data.isSuperHost">
                SUPER HOST
            </div>
            {{ data.description }}
        </div>
        <div class="rating">
            <img src="@/components/icons/star.svg" alt="">
            {{ data.rating }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-img {
    margin-top: 32px;
    width: 100%;
    border-radius: 24px;
}
.card {
    margin: 24px 0;
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
</style>