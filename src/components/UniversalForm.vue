<script setup lang="ts">
import { ref, computed } from 'vue'
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
  columned?: boolean
}

const props = defineProps<Props>()
const isValid = ref<boolean>(false)
const snackBar = ref<boolean>(false)
const snackBarTimeout: number = 2000
const oddFields = computed(() => {
  return props.fields.filter((_, i) => i % 2 !== 0)
})

const evenFields = computed(() => {
  return props.fields.filter((_, i) => i % 2 === 0)
})
</script>

<template>
  <v-form v-model="isValid" @submit.prevent>
    <v-container>
      <template v-if="props.columned">
        <v-row>
          <v-col cols="6">
            <component
              class="mb-2"
              v-for="field in evenFields"
              :key="field.id"
              :id="field.id"
              :is="field.is"
              v-bind="field.attrs"
              v-model="field.modelValue"
            />
          </v-col>
          <v-col cols="6">
            <component
              class="mb-2"
              v-for="field in oddFields"
              :key="field.id"
              :id="field.id"
              :is="field.is"
              v-bind="field.attrs"
              v-model="field.modelValue"
            />
          </v-col>
        </v-row>
      </template>
      <template v-else>
        <component
          class="mb-2"
          v-for="field in props.fields"
          :key="field.id"
          :id="field.id"
          :is="field.is"
          v-bind="field.attrs"
          v-model="field.modelValue"
        ></component>
      </template>
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
          @click="props.onSubmit, (snackBar = true)"
          class="ml-2"
          type="submit"
          >Создать</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
  <v-snackbar v-model="snackBar" :timeout="snackBarTimeout">
    Данные успешно отправлены
  </v-snackbar>
</template>
