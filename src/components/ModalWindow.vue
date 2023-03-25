<script lang="ts" setup>
import { ref } from 'vue';
import { useCurrent } from '@/stores/current'
import { useGuests } from '@/stores/guests'
import { useModal } from '@/stores/modal'
import { useStays } from '@/stores/stays';

const Current = useCurrent();
const Guests = useGuests();
const Modal = useModal();
const Stays = useStays();

const currentCity = ref(Current.getCurrent);
const cities = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
]
const countAdults = ref(Guests.getAdult);
const countChildren = ref(Guests.getChildren);
const citiesActive = ref(true);

const activateCities = () => {
    citiesActive.value = true;
}

const activateTasks = () => {
    citiesActive.value = false;
}

const updateCity = (city: string) => {
    currentCity.value = city
} 

const refreshCounters = () => {
    countAdults.value = 0;
    countChildren.value = 0;
}

const addCounterAdult = () => {
    countAdults.value++;
}
const subtractCounterAdult = () => {
    if (countAdults.value == 0)
        return;
    countAdults.value--;
}

const addCounterChildren = () => {
    countChildren.value++;
}
const subtractCounterChildren = () => {
    if (countChildren.value == 0)
        return;
    countChildren.value--;
}

const showGuests = () => {
    const sum = countChildren.value + countAdults.value; 
    if (sum == 0)
        return "Add Guests";
    if (sum == 1)
        return "1 guest";
    return sum + " guests";
}

const searchButtonPressed = () => {
    Current.updateCurrent(currentCity.value); 
    Guests.assignGuests(countAdults.value, countChildren.value);
    Modal.updateIsShown();
}
</script>

<template>
    <div class="options">
        <div class="field" :class="{border: citiesActive}"  @click="activateCities()">
            <div class="top">LOCATION</div>
            <div class="bottom">{{ currentCity }}</div>
        </div>
        <div class="field" :class="{border: !citiesActive}"  @click="activateTasks()">
            <div class="top">GUESTS</div>
            <div class="bottom">{{ showGuests() }}</div>
        </div>
        <div class="search" @click="searchButtonPressed()">
            <img src="@/components/icons/search_icon.svg" alt="Search">
            Search
        </div>
        <div class="cities" :class="{close: !citiesActive}">
            <div class="city" v-for="city in cities" @click="updateCity(city); refreshCounters(); activateTasks()">
                <img src="@/components/icons/pin.svg" alt="pin">
                {{ city }}
            </div>
        </div>
        <div class="tasks" :class="{close: citiesActive}">
            <div class="task">
                <div class="title">Adults</div>
                <div class="description">Ages 13 or above</div>
                <div class="counter">
                    <div class="plus" @click="subtractCounterAdult()"><div style="margin: 0 auto">-</div></div>
                    <div class="count">{{ countAdults }}</div>
                    <div class="plus" @click="addCounterAdult()"><div style="margin: 0 auto">+</div></div>
                </div>
            </div>
            <div class="task">
                <div class="title">Children</div>
                <div class="description">Ages 2-12</div>
                <div class="counter">
                    <div class="plus" @click="subtractCounterChildren()"><div style="margin: 0 auto">-</div></div>
                    <div class="count">{{ countChildren}}</div>
                    <div class="plus" @click="addCounterChildren()"><div style="margin: 0 auto">+</div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.options {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 30px;
    margin: 24px auto 0;

    .search {
        align-items: center;
        max-width: 120px;
        display: flex;
        justify-content: center;
        background-color: #EB5757;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        padding: 12px 24px;
        border-radius: 12px;
        cursor: pointer;
        img {
            height: 24px;
            margin-right: 12px;
        }
    }
}

.close {
    visibility: hidden;
}

.border {
    border: 1px solid black;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 10px 27px;
    border-radius: 16px;
    width: 100%;
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

.task {
    margin-top: 18px;
    font-family: 'Muli', sans-serif;
    font-size: 14px;
    line-height: 18px;
    margin-left: 27px;
    .title {
        font-weight: 700;
        color: #333333;
    }
    .description {
        color: #BDBDBD;
        margin-bottom: 12px;
    }
    .counter {
        display: flex;
        align-items: center;        
        .count {
            margin: 0 15px;
            color: black;
        }
        .plus {
            display: flex;
            align-items: center;
            height: 23px;
            width: 23px;
            border: 1px solid #828282;
            border-radius: 4px;
            cursor: pointer;
        }
    }
}

.tasks {
    margin-bottom: 70px;
}

.cities {
    margin: 0 0 33px;
    font-family: 'Muli', sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 18px;

    .city {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 0 27px 36px;
        cursor: pointer;
        img {
            height: 24px;
        }
    }
}

@media (max-width: 768px) {
    .options {
        grid-template-columns: 1fr;
    }
}

</style>