<template>
  <div @click="money.click">{{code?.slice(0, money.count)}}</div>
</template>

<script setup lang="ts">
  import useMoneyStore from '../stores/money'

  const money = useMoneyStore()
  const code = process.env.CODE?.split('\n')
  console.log(code)
</script>
