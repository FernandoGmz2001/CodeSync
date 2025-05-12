<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideCircleUser, LucideHandHelping } from 'lucide-vue-next';
import type { Problem } from '~/types/problems'

const props = defineProps<{
  problem: Problem
  showActions?: boolean
}>()

const emit = defineEmits(['solve', 'view'])
</script>

<template>
  <Card class="hover:shadow-lg transition-shadow duration-200 w-full">
    <CardHeader>
      <CardTitle class="line-clamp-1 flex flex-col ">
        <div class="flex items-center gap-2 text-xs text-gray-500">
          <p>@{{ problem.author.username }}</p>
        </div>
        <p class="text-lg font-semibold">
          {{ problem.title }}
        </p>
      </CardTitle>
    </CardHeader>
    <CardContent class="space-y-3">
      <p class="text-sm text-muted-foreground line-clamp-2">
        {{ problem.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <Badge variant="secondary" class="text-xs ">
          {{ problem.language }}
        </Badge>
      </div>
    </CardContent>

    <CardFooter v-if="showActions" class="flex justify-between gap-2 w-full  flex-end justify-end">
      <Button size="sm" @click="emit('solve', problem.id)">
        <LucideHandHelping />
        Colaborar
      </Button>
    </CardFooter>
  </Card>
</template>
