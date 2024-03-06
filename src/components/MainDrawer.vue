<script setup lang="ts">
  import Incrementer from './Incrementer.vue'
</script>
<template>
  <v-navigation-drawer rail expand-on-hover>
    <v-list density="default">
      <Incrementer />
      <v-divider />
      <v-list-item prepend-icon="mdi-hail" value="Items" title="Items"></v-list-item>
      <v-list-item prepend-icon="mdi-star" value="Upgrades" title="Upgrades"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


