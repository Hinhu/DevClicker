<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height">
      <MainDrawer />
      <ItemsDrawer />
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import MainDrawer from './MainDrawer.vue'
  import ItemsDrawer from './ItemsDrawer.vue'
</script>
