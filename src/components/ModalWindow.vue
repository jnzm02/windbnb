<script lang="ts" setup>
const currentCity = "Helsinki, Finland";
const cities = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
]
</script>

<template>
    <div class="options">
        <div class="option">
            <div class="field">
                <div class="top">LOCATION</div>
                <div class="bottom">{{ currentCity }}</div>
            </div>
            <div class="field">
                <div class="top">GUESTS</div>
                <div class="bottom">Add Guests</div> 
            </div>
            <input type="text" placeholder="Add guests">
        </div>
        <div class="search">
            <img src="@/components/icons/search_icon.svg" alt="Search">
            Search
        </div>
    </div>
    <div class="cities">
        <div class="city" v-for="city in cities">
            <img src="@/components/icons/pin.svg" alt="pin">
            {{ city }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.options {
    width: 70%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: 0 auto;

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #EB5757;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        padding: 12px 24px;
        border-radius: 12px;
        margin: 24px 0;
        cursor: pointer;
        img {
            height: 24px;
            margin-right: 12px;
        }
    }
}

.option {
    display: flex;
    .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        .top {
            font-family: 'Muli', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #BDBDBD;
        }
        .bottom {
            font-family: 'Muli', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #000000;
        }
    }
}

.cities {
    width: 70%;
    margin: 0 auto 60px;
    font-family: 'Muli', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    .city {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 18px 0;
        cursor: pointer;
        img {
            height: 24px;
        }
    }
}

</style>