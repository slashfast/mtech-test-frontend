<script setup lang="ts">
import { ref } from 'vue'
import UniversalForm from './UniversalForm.vue'
import type { Field } from './UniversalForm.vue'

const rules = {
  range: (value: number) => (0 <= value && value <= 100) || 'Введите число от 0 до 100'
}

const fields = ref<Field[]>([
  {
    is: 'v-combobox',
    id: 'employee',
    attrs: {
      'prepend-icon': 'mdi-account',
      label: 'Сотрудник',
      required: true,
      items: ['Сотрудник 1', 'Сотрудник 2']
    }
  },
  {
    is: 'v-combobox',
    id: 'lead',
    attrs: {
      'prepend-icon': 'mdi-account',
      label: 'Руководитель',
      required: true,
      items: ['Руководитель 1', 'Руководитель 2']
    }
  },
  {
    is: 'v-select',
    id: 'bid',
    attrs: {
      label: 'Тип ставки',
      required: true,
      items: ['opex', 'capex']
    }
  },
  {
    is: 'v-select',
    id: 'business-unit',
    attrs: {
      label: 'Бизнес единица',
      required: true,
      items: ['MVM', 'MTech']
    }
  },
  {
    is: 'v-text-field',
    id: 'capitalization-percent',
    attrs: {
      label: 'Процент капитализации',
      required: true,
      clearable: true,
      rules: [rules.range]
    }
  },
  {
    is: 'v-text-field',
    id: 'name',
    attrs: {
      label: 'Должность',
      required: true
    }
  }
])
</script>

<template>
  <UniversalForm :fields="fields"></UniversalForm>
</template>
