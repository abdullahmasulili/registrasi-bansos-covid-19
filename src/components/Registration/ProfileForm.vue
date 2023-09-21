<script setup>
import { ref } from "vue";
import FormInputs from "@/components/others/FormInputs.vue";

const forms = ref([
  {
    label: "Nama",
    slug: "name",
    value: null,
    validation: null,
    type: "text",
  },
  {
    label: "NIK",
    slug: "citizenship_number",
    value: null,
    validation: null,
    type: "number",
  },
  {
    label: "Nomor Kartu Keluarga",
    slug: "family_registration_number",
    value: null,
    validation: null,
    type: "number",
  },
  {
    label: "Foto KTP",
    slug: "id_card_picture",
    value: null,
    validation: null,
    type: "file",
  },
  {
    label: "Foto Kartu Keluarga",
    slug: "family_registration_card_picture",
    value: null,
    validation: null,
    type: "file",
  },
  {
    label: "Umur",
    slug: "age",
    value: null,
    validation: null,
    type: "number",
  },
  {
    label: "Jenis Kelamin",
    slug: "sex",
    value: null,
    validation: null,
    type: "enum",
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
  />
</template>
