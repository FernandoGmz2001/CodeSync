<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'
import languages from './languages.json'
import { sortOptions } from './utils';
</script>

<template>

  <Card class="flex flex-col items-center gap-4 p-4 w-[400px]">
    <div class="relative w-full max-w-sm items-center">
      <Input id="search" type="text" placeholder="Buscar por nombre..." class="pl-7" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="size-4 text-muted-foreground" />
      </span>
    </div>

    <USelect placeholder="Selecciona lenguajes" :items="languages.lenguajes" label="Lenguaje" valueKey="nombre"
      displayKey="nombre" />
    <USelect placeholder="Seleccionar orden" :items="sortOptions" label="Ordenar por" valueKey="value"
      displayKey="label" />
  </Card>
</template>
