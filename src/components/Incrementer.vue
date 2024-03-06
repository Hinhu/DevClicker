<script setup lang="ts">
  import useMoneyStore from '../stores/money'

  const money = useMoneyStore()

  setInterval(() => {
    money.increment()
  }, 100)
</script>

<template>
  <v-list-item prepend-icon="mdi-currency-usd">{{ money.count }}</v-list-item>
</template>

