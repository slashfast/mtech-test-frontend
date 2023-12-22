<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import UniversalForm from './UniversalForm.vue'
import type { Field } from './UniversalForm.vue'
import type Employee from './NewEmployeeForm.vue'
import { get } from '../api'

const rules = {
  required: (value: number | string) => !!value || 'Необходимое поле'
}

const fields = ref<Field[]>([])

const selectedManager = ref<typeof Employee>()
const product = ref<string>()
const jiraLink = ref<string>()
const selectedDomain = ref<string>()

onBeforeMount(async () => {
  await get('/employees/?role=manager').then((data) => {
    fields.value.push({
      is: 'v-combobox',
      id: 'manager',
      modelValue: selectedManager,
      attrs: {
        'prepend-icon': 'mdi-account',
        label: 'Менеджер',
        items: data,
        rules: [rules.required]
      }
    })
  })
  fields.value = fields.value.concat([
    {
      is: 'v-text-field',
      id: 'produict-name',
      modelValue: product,
      attrs: { label: 'Название продукта', rules: [rules.required] }
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
      modelValue: jiraLink,
      attrs: {
        class: 'mb-2',
        label: 'Ссылка в Jira',
        messages: ['Ссылка в jira, включая https://'],
        rules: [rules.required]
      }
    }
  ])
  await get('/domains').then((data) => {
    fields.value.push({
      is: 'v-select',
      id: 'domain',
      modelValue: selectedDomain,
      attrs: {
        label: 'Домен',
        rules: [rules.required],
        items: data
      }
    })
  })
})

const onSubmit = function () {
  console.log(
    selectedManager.value,
    product.value,
    jiraLink.value,
    selectedDomain.value
  )
}
</script>

<template>
  <UniversalForm :fields="fields" :onSubmit="onSubmit"></UniversalForm>
</template>
