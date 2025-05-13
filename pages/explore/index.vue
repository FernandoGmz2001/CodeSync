<script setup lang="ts">
import ProblemCard from './components/ProblemCard.vue'
import problemsData from './components/problems.json'
import Filters from './components/Filters.vue'
import { LucideCirclePlus } from 'lucide-vue-next'

const problems = ref(problemsData.problems)
const searchQuery = ref('')
const selectedStatus = ref('all')
const isLoading = ref(false)

const filteredProblems = computed(() => {
  return problems.value.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = selectedStatus.value === 'all' ||
                         problem.status === selectedStatus.value
    return matchesSearch && matchesStatus
  })
})

function handleSolve(problemId: string) {
  const problem = problems.value.find(p => p.id === problemId)
  if (problem) {
    problem.status = 'resolved'
    alert(`Problema ${problemId} marcado como resuelto`)
  }
}

function handleView(problemId: string) {
  console.log('Navegar a problema:', problemId)
}

function handleSearch(value: string) {
  searchQuery.value = value
}

function handleStatusChange(status: string) {
  selectedStatus.value = status
}
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto dark">
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="">
        <div class=" dark p-4 rounded-lg">
          <h2 class="text-lg font-semibold mb-4 text-white">Filtros</h2>
          <Filters
            @search="handleSearch"
            @status-change="handleStatusChange"
          />
        </div>
      </div>
      <div class="flex-1">
        <div class="mb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
          <h1 class="text-2xl font-bold text-white">
            Posts
            <span class="text-white text-lg">({{ filteredProblems.length }})</span>
          </h1>
          <Button class="dark">
            <LucideCirclePlus />

            Crear pregunta
          </Button>

        </div>

        <!-- Estado vacío -->
        <div
          v-if="filteredProblems.length === 0"
          class="bg-white p-8 rounded-lg text-center border border-dashed"
        >
          <p class="text-gray-500">No se encontraron problemas</p>
        </div>

        <!-- Lista de problemas -->
        <div v-else class="grid gap-4">
          <ProblemCard
            v-for="problem in filteredProblems"
            :key="problem.id"
            :problem="problem"
            class="hover:shadow-md transition-shadow"
            @solve="handleSolve"
            @view="handleView"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Transiciones básicas */
.hover\:shadow-md {
  transition: box-shadow 0.2s ease;
}

.transition-colors {
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* Animación de carga esquelética */
@keyframes pulse {
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>