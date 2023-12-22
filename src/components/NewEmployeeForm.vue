<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import UniversalForm from './UniversalForm.vue'
import type { Field } from './UniversalForm.vue'
import { get } from '../api'

export interface Employee {
  value: string
  title: string
}

const rules = {
  range: (value: number) =>
    (0 <= value && value <= 100) || 'Введите число от 0 до 100',
  required: (value: number | string) => !!value || 'Необходимое поле'
}

const fields = ref<Field[]>([])

const selectedEmployee = ref<Employee>()
const selectedLead = ref<Employee>()
const bid = ref<string>()
const businessUnit = ref<string>()
const captialization = ref<number>()
const role = ref<string>()

onBeforeMount(async () => {
  await get('/employees/').then((data) => {
    fields.value.push({
      is: 'v-combobox',
      id: 'employee',
      modelValue: selectedEmployee,
      attrs: {
        'prepend-icon': 'mdi-account',
        label: 'Сотрудник',
        items: data,
        rules: [rules.required]
      }
    })
  })
  await get('/employees/?role=lead').then((data) => {
    fields.value.push({
      is: 'v-combobox',
      id: 'lead',
      modelValue: selectedLead,
      attrs: {
        'prepend-icon': 'mdi-account',
        label: 'Руководитель',
        items: data,
        rules: [rules.required]
      }
    })
  })

  fields.value.push({
    is: 'v-select',
    id: 'bid',
    modelValue: bid,
    attrs: {
      label: 'Тип ставки',
      items: ['opex', 'capex'],
      rules: [rules.required]
    }
  })
  await get('/business_units').then((data) => {
    fields.value.push({
      is: 'v-select',
      id: 'business-unit',
      modelValue: businessUnit,
      attrs: {
        label: 'Бизнес единица',
        items: data,
        rules: [rules.required]
      }
    })
  })
  fields.value = fields.value.concat([
    {
      is: 'v-text-field',
      id: 'capitalization-percent',
      modelValue: captialization,
      attrs: {
        label: 'Процент капитализации',
        clearable: true,
        rules: [rules.required, rules.range],
        'model-value': 0
      }
    },
    {
      is: 'v-text-field',
      id: 'role',
      modelValue: role,
      attrs: {
        label: 'Должность',
        rules: [rules.required]
      }
    }
  ])
})

const onSubmit = function () {
  console.log(
    selectedEmployee.value?.value,
    selectedLead.value?.value,
    bid.value,
    businessUnit.value,
    captialization.value,
    role.value
  )
}
</script>

<template>
  <UniversalForm :fields="fields" :onSubmit="onSubmit"></UniversalForm>
</template>
