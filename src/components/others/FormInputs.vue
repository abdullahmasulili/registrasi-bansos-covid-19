<script setup>
import { computed } from "vue";

const porps = defineProps([
  "label",
  "value",
  "type",
  "variant",
  "validation",
  "items",
]);
const model = computed({
  get() {
    return this.value;
  },
  set(val) {
    this.$emit("input", val);
  },
});
const fileModel = computed({
  get() {
    return this.value;
  },
  set(val) {
    this.$emit("change", val);
  },
});
</script>

<template>
  <v-text-field
    v-if="type === 'text' || type === 'number'"
    :label="label"
    :type="type"
    :variant="variant"
    :v-model="model"
    @change="$emit('change')"
    clearable
  />
  <v-file-input
    v-if="type === 'file'"
    :label="label"
    v-model="fileModel"
    :variant="variant"
  />
  <v-select
    v-if="type === 'enum'"
    :label="label"
    :variant="variant"
    :items="items"
  />
</template>
