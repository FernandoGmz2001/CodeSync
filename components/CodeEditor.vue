<template>
  <div>
    <div ref="editorContainer" style="height: 400px;"></div>
    <Button class="dark" @click="runCode">Ejecutar Código</Button>
    <div class="output">
      <h4>Salida:</h4>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCodeExecution } from '~/composables/useCodeExecution'
import Button from './ui/button/Button.vue'

const editorContainer = ref<HTMLElement | null>(null)
const editorInstance = ref<any>(null)
const output = ref('')
const { executeCode } = useCodeExecution()

onMounted(async () => {
  const monaco = await import('monaco-editor') // ✅ carga dinámica dentro de onMounted

  editorInstance.value = monaco.editor.create(editorContainer.value!, {
    value: `print("Hola mundo")`,
    language: 'python',
    theme: 'vs-dark',
    automaticLayout: true
  })
})

const runCode = async () => {
  const code = editorInstance.value?.getValue() || ''
  console.log(code)
  const result = await executeCode(code)
  output.value = result
}
</script>

<style scoped>
.output {
  background-color: #111;
  color: #0f0;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
}
</style>
