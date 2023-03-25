<script setup lang="ts">
import InputSearch from './components/InputSearch.vue'
import StayList from './components/StayList.vue'
import ModalWindow from './components/ModalWindow.vue'
import items from './data/stays.json'
import { useCurrent } from '@/stores/current'
import { useGuests } from '@/stores/guests'
import { useModal } from '@/stores/modal'
import { useStays } from '@/stores/stays'

const Current = useCurrent()
const Guests = useGuests()
const Modal = useModal();
const Stays = useStays();

const data = Stays.getStays;

const ShowCurrent = () => {
  const current = Current.getCurrent;
  if (current.length > 0)
    return current;
  return "Search for City"
}

const showGuests = () => {
  const guests = Guests.getGuests;
  if (guests == 0)
    return "Add Guests"
  if (guests == 1)
    return "1 guest"
  return Guests.getGuests + ' guests';
}

const showNumber = () => {
  console.log(data[0]);
  if (data.length > 12)
    return "12+ stays";
  else 
    return data.length + "stays";
}

</script>

<template>
  <div v-if="Modal.getIsShown" class="modal">
    <ModalWindow />
  </div>
  <div v-if="Modal.getIsShown" class="mask" @click="Modal.updateIsShown"></div>
  <header>
    <div class="title">
      <img src="@/components/icons/triangle.svg" alt="triangle">
      windbnb
    </div>
    <div class="search" @click="Modal.updateIsShown">
      <InputSearch :placeholder="ShowCurrent()"  />
      <InputSearch :placeholder="showGuests()" />
      <img src="@/components/icons/search_icon.svg" alt="Search">
    </div>
  </header>
  <main>
    <nav>
      <div class="title">Stays in Finland</div>
      <div class="stays">{{ showNumber() }}</div>
    </nav>
    <div class="list">
      <StayList :data="data" />
    </div>
  </main>
  <footer>

  </footer>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .title {
    color: #EB5757;
    font-weight: 700;
    display: flex;
    align-items: center;

    img {
      height: 24px;
      margin-right: 12px;
      color: #EB5757;
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    padding: 0 12px;
    .city {
      margin-right: 12px;
    }
    img {
      height: 24px;
      margin: 0 12px;
      cursor: pointer;
    }
  }
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
    width: 100%;
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

nav {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  .title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
  }

  .stays {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
    align-items: center;
  }
}

.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 32px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
  }

  .list {
    grid-template-columns: auto;
  }
}
</style>
