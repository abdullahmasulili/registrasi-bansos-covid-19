<script setup>
import { ref } from "vue";
import ProfileForm from "@/components/Registration/ProfileForm.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" md="6" lg="6">
      <v-card rounded="xl" class="pa-3">
        <v-card-title>
          <v-row no-gutters class="justify-space-between">
            <h2 class="pt-2 text-primary">Biodata Diri</h2>
            <v-avatar
              icon="mdi-account-circle"
              color="primary"
              variant="elevated"
              size="48"
            />
          </v-row>
        </v-card-title>
        <v-divider />
        <v-card-text>
          <ProfileForm />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" lg="6">
      <v-card rounded="xl">
        <v-card-text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, dolor
          animi voluptatum, eveniet magni unde iure dolorem aut saepe blanditiis
          ad repellendus perspiciatis accusantium nesciunt aspernatur sit odio
          ut architecto.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
