<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const route = useRoute()

const getCurrentRouteName = () => {
  const path = route.path.split('/').filter(Boolean).pop() || 'dashboard'
  return path.charAt(0).toUpperCase() + path.slice(1)
}
</script>

<template>
  <nav class="flex items-center justify-between border-b px-6 py-3">
    <Breadcrumb class="flex items-center gap-2">
      <BreadcrumbItem>
        <slot />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <span class="text-sm font-medium">{{ getCurrentRouteName() }}</span>
      </BreadcrumbItem>
    </Breadcrumb>

  </nav>
</template>
