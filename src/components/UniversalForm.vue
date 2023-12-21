<script setup lang="ts">
export interface Field {
  is: string
  id: string
  attrs?: object
}

interface Props {
  fields: Field[]
  onCancel?: Function
  onSubmit?: Function
}

const props = defineProps<Props>()
</script>

<template>
  <v-form @submit.prevent>
    <v-container>
      <component
        v-for="field in props.fields"
        :key="field.id"
        :id="field.id"
        :is="field.is"
        v-bind="field.attrs"
      ></component>
    </v-container>
    <v-container>
      <v-row justify="end">
        <v-btn variant="text" v-if="props.onCancel" @click="props.onCancel" class="ml-2"
          >Отмена</v-btn
        >
        <v-btn v-if="props.onSubmit" @click="props.onSubmit" class="ml-2" type="submit"
          >Создать</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
</template>
