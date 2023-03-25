import { defineStore } from 'pinia';
import { ref } from 'vue'

interface guests {
  children: number;
  adult: number;
}

export const useGuests = defineStore({
  id: 'guests',

  state: (): guests => ({
    children: 0,
    adult: 0,
  }),

  getters: {
    getAdult(): number {
        return this.adult;
    },

    getChildren(): number {
        return this.children;
    },

    getGuests(): number { 
        return this.adult + this.children;
    }
  },

  actions: {
    assignGuests(adult: number, children: number) {
        this.adult = adult;
        this.children = children;
    }
  },
});
