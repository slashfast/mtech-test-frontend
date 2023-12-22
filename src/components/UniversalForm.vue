<script setup lang="ts">
import { ref } from 'vue'
export interface Field {
  is: string
  id: string
  modelValue?: any
  attrs?: object
}

interface Props {
  fields: Field[]
  modelValue?: any
  onCancel?: Function
  onSubmit?: Function
}

const props = defineProps<Props>()
const isValid = ref<boolean>(false)
</script>

<template>
  <v-form v-model="isValid" @submit.prevent>
    <v-container>
      <component
        class="mb-2"
        v-for="field in props.fields"
        :key="field.id"
        :id="field.id"
        :is="field.is"
        v-bind="field.attrs"
        v-model="field.modelValue"
      ></component>
    </v-container>
    <v-container>
      <v-row justify="end">
        <v-btn
          variant="text"
          v-if="props.onCancel"
          @click="props.onCancel"
          class="ml-2"
          >Отмена</v-btn
        >
        <v-btn
          v-if="props.onSubmit"
          :disabled="!isValid"
          @click="props.onSubmit"
          class="ml-2"
          type="submit"
          >Создать</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
</template>
