<script setup>
import ProfileForm from "@/components/registration/ProfileForm.vue";
import ResidenceForm from "@/components/registration/ResidenceForm.vue";
import RegistrationCardLayout from "@/layouts/components/RegistrationCard.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" md="6" lg="6">
      <RegistrationCardLayout title="Biodata Diri" icon="mdi-account-circle">
        <ProfileForm />
      </RegistrationCardLayout>
    </v-col>
    <v-col cols="12" md="6" lg="6">
      <RegistrationCardLayout title="Domisili" icon="mdi-map-marker-radius">
        <ResidenceForm />
      </RegistrationCardLayout>
    </v-col>
  </v-row>
</template>
