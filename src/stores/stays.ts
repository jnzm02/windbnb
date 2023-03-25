import { defineStore } from 'pinia';
import items from '@/data/stays.json'
import { ref } from 'vue'

interface staysList {
    stays: Object,

}

export const useStays = defineStore({
  id: 'stays',

  state: (): staysList => ({
    stays: JSON.parse(JSON.stringify(items))
  }),

  getters: {
    getStays(): Object {
        return this.stays;
    }
  },

  actions: {
    updateStays(city: string, guests: number) :void {
        const all_stays = JSON.parse(JSON.stringify(items));
        
        if (city == "") {
            this.stays = all_stays.map((stay: Object) => {
                stay.MaxGuests >= guests;
                return stay;
            })   
        }
        const new_city = ref("");
        for (let i = 0; i < city.length; i++) {
            if (city[i] == ',')
                break;
            else
                new_city.value += city[i];
        }
        this.stays = all_stays.map((stay: Object) => {
            stay.city = new_city;
            stay.MaxGuests >= guests;
            return stay;
        })
    }
  },
});
