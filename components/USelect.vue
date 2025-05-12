<script setup lang="ts">
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SelectItemValue = string | number | Record<string, any>

const props = defineProps<{
  width?: string;
  placeholder?: string;
  items: SelectItemValue[];
  selectLabel?: string;
  label?: string;
  // Nuevas props para personalización
  displayKey?: string; // Propiedad a mostrar cuando items es objeto
  valueKey?: string; // Propiedad a usar como valor (opcional)
  itemClass?: string; // Clases para los items
}>()

const emit = defineEmits(['update:modelValue'])

const modelValue = defineModel<SelectItemValue>()

const getDisplayValue = (item: SelectItemValue) => {
  if (!props.displayKey || typeof item !== 'object') return String(item)
  return item[props.displayKey] ?? String(item)
}

const getItemValue = (item: SelectItemValue) => {
  if (!props.valueKey || typeof item !== 'object') return item
  return item[props.valueKey] ?? item
}
</script>

<template>
  <div class="flex flex-col items-left gap-2" :class="[
    'transition-all duration-200',
    props.width ? `w-[${props.width}]` : 'w-full'
  ]" :style="props.width ? { width: props.width } : {}">
    <Label v-if="label">{{ label }}</Label>

    <Select v-model="modelValue">
      <SelectTrigger class="w-full">
        <SelectValue :placeholder="placeholder || 'Selecciona...'">
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel v-if="selectLabel">{{ selectLabel }}</SelectLabel>
          <SelectItem v-for="(item, index) in items" :key="index" :value="getItemValue(item)" :class="itemClass">
            {{ getDisplayValue(item) }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
