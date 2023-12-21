<script setup lang="ts">
import { ref } from 'vue'
import UniversalForm from './UniversalForm.vue'
import type { Field } from './UniversalForm.vue'

const fields = ref<Field[]>([
  {
    is: 'v-combobox',
    id: 'manager',
    attrs: {
      'prepend-icon': 'mdi-account',
      label: 'Менеджер',
      required: true,
      items: ['Менеджер 1', 'Менеджер 2']
    }
  },
  {
    is: 'v-text-field',
    id: 'name',
    attrs: { label: 'Название продукта', required: true }
  },
  {
    is: 'v-divider',
    id: 'divider1',
    attrs: {
      class: 'mb-4'
    }
  },
  {
    is: 'v-text-field',
    id: 'name',
    attrs: {
      class: 'mb-2',
      label: 'Ссылка в Jira',
      messages: ['Ссылка в jira, включая https://'],
      required: true
    }
  },
  {
    is: 'v-select',
    id: 'domain',
    attrs: {
      label: 'Домен',
      required: true,
      items: ['Бэк-офис', 'Техплатформа', 'Офис больших данных', 'Цифровой опыт поставщика']
    }
  }
])

const onSubmit = function () {
  console.log('Submit')
}
</script>

<template>
  <UniversalForm :fields="fields" :onSubmit="onSubmit"></UniversalForm>
</template>
