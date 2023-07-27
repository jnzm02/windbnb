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

export const useStays = defineStore({
  id: 'stays',

  state: () => ({
    stays: JSON.parse(JSON.stringify(items)),
    currentStays: JSON.parse(JSON.stringify(items)),
    stayNumber: JSON.parse(JSON.stringify(items)).lengths
  }),

  getters: {
    getStays() :Stay[] {
      for (const item of this.stays) {
        console.log(item);
      }
      return this.stays;
    },
    getStaysWithCityAndNumber: (state) => (city: string, guests: number) => {
        return state.stays.filter((stay: Stay) => stay.city === city && stay.maxGuests > guests);
    },
    getCurrentStays() :Stay[] {
        return this.currentStays;
    },
    getCurrentStaysNumber() :number {
        return this.stayNumber;
    }
  },

  actions: {
    updateStays(city: string, guests: number) :void {
      const allStays = this.stays;
      this.currentStays = city ? allStays.filter((stay: Stay) => stay.city === city && stay.maxGuests > guests) : allStays;
      this.stayNumber = this.currentStays.length;
    }
  },
});
