<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <Navbar>
        <SidebarTrigger />
      </Navbar>
      <div class="p-5">
        <NuxtPage />
      </div>
    </main>
  </SidebarProvider>
</template>