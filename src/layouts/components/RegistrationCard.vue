<script setup>
const props = defineProps(["title", "icon"]);
</script>

<template>
  <v-card rounded="xl" class="pa-3">
    <v-card-title>
      <v-row no-gutters class="justify-space-between">
        <h2 class="pt-2 text-primary">{{ title }}</h2>
        <v-avatar :icon="icon" color="primary" variant="elevated" size="48" />
      </v-row>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
