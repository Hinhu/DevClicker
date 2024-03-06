import { defineStore } from 'pinia'

const useMoneyStore = defineStore('counter', {
  state: () => {
    return { count: 0, incAmount: 0 }
  },
  actions: {
    increment() {
      this.count += this.incAmount
    },
    click() {
      this.count += 1
    }
  },
})

export default useMoneyStore
