import { defineStore } from 'pinia';

interface current {
  city: string;
}

export const useCurrent = defineStore({
  id: 'current',

  state: (): current => ({
    city: "",
  }),

  getters: {
    getCurrent(): string { 
        return this.city;  
    }
  },

  actions: {
    updateCurrent(new_city: string) {
        this.city = new_city;
    }
  },
});
