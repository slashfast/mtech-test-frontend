<script setup lang="ts">
import { ref } from 'vue'
import NewProjectForm from './components/NewProjectForm.vue'
import NewEmployeeForm from './components/NewEmployeeForm.vue'

const tab = ref(null)
</script>

<template>
  <v-app>
    <v-container>
      <v-sheet width="1000" class="mx-auto">
        <v-card>
          <v-tabs v-model="tab">
            <v-tab value="one">Проект</v-tab>
            <v-tab value="two">Сотрудник</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one"> <NewProjectForm /></v-window-item>

              <v-window-item value="two"> <NewEmployeeForm /></v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-container>
  </v-app>
</template>
