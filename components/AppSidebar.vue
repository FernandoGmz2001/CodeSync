<script setup lang="ts">
import {
  Home,
  ClipboardList,
  MessageCircle,
  Code,
  Users,
  Settings,
  HelpCircle
} from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const mainItems = [
  {
    title: "Explorar",
    url: "/explore",
    icon: Home,
  },
    {
    title: "Usuarios",
    url: "/users",
    icon: Users,
  },
];

const settingsItems = [
  {
    title: "Configuración",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Ayuda",
    url: "/help",
    icon: HelpCircle,
  }
];
</script>

<template>
  <Sidebar class="bg-background border-r">
    <SidebarContent class="flex flex-col h-full">
      <div class="p-4 ">
        <div class="flex items-center gap-2 text-primary">
          <Code class="w-6 h-6" />
          <span class="text-xl font-bold">Code Sync</span>
        </div>
      </div>

      <SidebarGroup class="flex-1">
        <SidebarMenu>
          <SidebarMenuItem v-for="item in mainItems" :key="item.title">
            <SidebarMenuButton as-child>
              <NuxtLink :to="item.url" class="flex items-center gap-3 p-2 hover:bg-accent">
                <component :is="item.icon" class="w-5 h-5" />
                <span>{{ item.title }}</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel class="px-2 text-muted-foreground text-xs">
          Configuración
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in settingsItems" :key="item.title">
              <SidebarMenuButton as-child>
                <NuxtLink :to="item.url" class="flex items-center gap-3 p-2 hover:bg-accent">
                  <component :is="item.icon" class="w-5 h-5" />
                  <span>{{ item.title }}</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </SidebarFooter>
    </SidebarContent>
  </Sidebar>
</template>
