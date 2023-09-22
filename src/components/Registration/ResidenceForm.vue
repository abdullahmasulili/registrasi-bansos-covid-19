<script setup>
import { ref } from "vue";
import FormInputs from "@/components/others/FormInputs.vue";

const forms = ref([
  {
    label: "Provinsi",
    slug: "province",
    value: null,
    validation: null,
    type: "enum",
  },
  {
    label: "Kab/Kota",
    slug: "state",
    value: null,
    validation: null,
    type: "enum",
  },
  {
    label: "Kecamatan",
    slug: "subdistrict",
    value: null,
    validation: null,
    type: "enum",
  },
  {
    label: "Kelurahan",
    slug: "urban_village",
    value: null,
    validation: null,
    type: "enum",
  },
  {
    label: "Alamat",
    slug: "address",
    value: null,
    validation: null,
    type: "text",
  },
  {
    label: "RT",
    slug: "neighbourhood",
    value: null,
    validation: null,
    type: "text",
  },
  {
    label: "RW",
    slug: "hamlet",
    value: null,
    validation: null,
    type: "text",
  },
]);
</script>

<template>
  <FormInputs
    v-for="form in forms"
    :key="form.slug"
    :label="form.label"
    :value="form.value"
    :type="form.type"
    variant="underlined"
    :items="form.options"
  />
</template>
