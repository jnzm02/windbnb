import { defineStore } from 'pinia';

interface modal {
    isShown: boolean
}

export const useModal = defineStore({
  id: 'modal',

  state: (): modal => ({
    isShown: false
  }),

  getters: {
    getIsShown(): boolean {
        return this.isShown;
    }
  },

  actions: {
    updateIsShown(): void {
        this.isShown = !this.isShown;
    }
  },
});
