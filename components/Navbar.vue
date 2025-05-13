<script setup lang="ts">
import { RouterLink } from 'vue-router' // Importación faltante
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const route = useRoute()

// Usamos computed para reactividad
const breadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)

  return segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`
    return {
      name: formatSegmentName(segment),
      path: index < segments.length - 1 ? path : null,
      isLast: index === segments.length - 1
    }
  })
})

const formatSegmentName = (segment: string) => {
  // Mejor formato para números y guiones
  if (/^\d+$/.test(segment)) return `#${segment}`
  return segment.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}
</script>

<template>
  <nav class="flex items-center justify-between border-b px-6 py-3  text-white">
    <Breadcrumb class="flex items-center gap-2 list-none text-white">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <BreadcrumbItem class="list-none text-white">
          <RouterLink
            v-if="!crumb.isLast"
            :to="crumb.path"
            class="text-sm font-medium hover:underline transition-colors"
          >
            {{ crumb.name }}
          </RouterLink>
          <span v-else class="text-sm font-medium text-white/60">
            {{ crumb.name }}
          </span>
        </BreadcrumbItem>

        <BreadcrumbSeparator
          v-if="!crumb.isLast"
          class="mx-2 text-gray-400"
        >
          /
        </BreadcrumbSeparator>
      </template>
    </Breadcrumb>
  </nav>
</template>