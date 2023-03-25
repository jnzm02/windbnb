import { defineStore } from 'pinia';
import items from '@/data/stays.json'
import { ref } from 'vue'

interface Stay {
    city: string,
    country: string,
    superHost: boolean,
    title: string,
    rating: number,
    maxGuests: number,
    type: string,
    beds: number,
    photo: string
}

interface Stays {
    stays: Stay[];
}

export const useStays = defineStore({
  id: 'stays',

  state: (): Stays => ({
    stays: JSON.parse(JSON.stringify(items))
  }),

  getters: {
    getStays() :Stay[] {
        return this.stays;
    },
    getStaysWithCityAndNumber: (state) => (city: string, guests: number) => {
        return state.stays.filter((stay: Stay) => stay.city === city && stay.maxGuests > guests);
    }
  },

  actions: {
    updateStays() :void {

    }
  },
});
