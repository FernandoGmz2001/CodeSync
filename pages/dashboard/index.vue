<script setup lang="ts">
// Importaciones de iconos y datos de ejemplo
import { ClipboardList, MessageCircle, Star, Code, PlusCircle, LucideEllipsisVertical } from 'lucide-vue-next'
import Badge from '~/components/ui/badge/Badge.vue';
import Card from '~/components/ui/card/Card.vue';
import CardContent from '~/components/ui/card/CardContent.vue';
import CardHeader from '~/components/ui/card/CardHeader.vue';
import Table from '~/components/ui/table/Table.vue';
import TableBody from '~/components/ui/table/TableBody.vue';
import TableCell from '~/components/ui/table/TableCell.vue';
import TableHead from '~/components/ui/table/TableHead.vue';
import TableHeader from '~/components/ui/table/TableHeader.vue';
import TableRow from '~/components/ui/table/TableRow.vue';

const stats = ref([
  { icon: ClipboardList, value: "3", label: "Solicitudes activas", trend: "up" },
  { icon: MessageCircle, value: "5", label: "Chats abiertos", trend: "steady" },
  { icon: Star, value: "85%", label: "Rating", trend: "up" }
])

const activeRequests = ref([
  { id: 1, language: "JavaScript", title: "Error en hook useEffect", status: "En progreso", time: "2h ago" },
  { id: 2, language: "Python", title: "Problema con Pandas DataFrame", status: "En espera", time: "30m ago" }
])
</script>

<template>
  <div class="space-y-6">
    <!-- Sección 1: Stats Cards -->
    <div class="grid gap-4 md:grid-cols-3">
      <Card v-for="stat in stats" :key="stat.label">
        <CardHeader class="flex flex-row items-center justify-between">
          <component :is="stat.icon" class="w-6 h-6" />
          <span class="text-sm text-muted-foreground">{{ stat.label }}</span>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ stat.value }}</div>
        </CardContent>
      </Card>
    </div>

    <!-- Sección 2: Solicitudes Activas -->
    <Card>
      <CardHeader>
        <CardTitle>Solicitudes Activas</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]">
                Lenguaje
              </TableHead>
              <TableHead>Problema</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead class="text-left">
                Tiempo
              </TableHead>
              <TableHead class="text-left">
                Acciones
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="request in activeRequests" :key="request.id">
              <TableCell>
                <Badge variant="secondary">
                  {{ request.language }}
                </Badge>
              </TableCell>
              <TableCell>{{ request.title }}</TableCell>
              <TableCell>
                <Badge variant="default">
                  {{ request.status }}
                </Badge>
              </TableCell>
              <TableCell class="text-left">{{ request.time }}</TableCell>
              <TableCell class="text-left">...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <!-- Sección 3: Acciones Rápidas -->
    <div class="flex gap-4">
      <Button class="gap-2">
        <PlusCircle class="w-4 h-4" />
        Nueva Solicitud
      </Button>
      <Button variant="outline" class="gap-2">
        <Code class="w-4 h-4" />
        Explorar Problemas
      </Button>
    </div>
  </div>
</template>
