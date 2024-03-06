<template>
  <v-responsive>
    <MainDrawer />
    <ItemsDrawer />
  </v-responsive>
  <Screen />
</template>

<script setup lang="ts">
  import MainDrawer from './MainDrawer.vue'
  import ItemsDrawer from './ItemsDrawer.vue'
  import Screen from './Screen.vue';
</script>
