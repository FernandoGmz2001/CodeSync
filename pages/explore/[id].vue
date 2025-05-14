<template>
  <div class="flex gap-6 h-full w-full p-4">
    <div class="flex-1 flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-200">
          <CodeBracketIcon class="w-6 h-6 inline-block mr-2 text-indigo-400" />
          Code Playground
        </h1>
      </div>

      <div class="flex gap-4">
        <!-- Edición -->
        <div class="grid grid-cols-1 gap-4 h-[calc(100vh-140px)] w-[50%]">
          <!-- HTML -->
          <div class="border-2 border-red-500/30 rounded-lg overflow-hidden">
            <div class="bg-red-900/20 px-4 py-2 flex items-center gap-2">
              <Html5Icon class="w-5 h-5 text-red-400" />
              <span class="font-mono text-red-400 text-sm">HTML</span>
            </div>
            <MonacoEditor v-model="htmlCode" lang="html" class="h-[400px]" :options="editorOptions" />
          </div>

          <!-- CSS -->
          <div class="border-2 border-blue-500/30 rounded-lg overflow-hidden">
            <div class="bg-blue-900/20 px-4 py-2 flex items-center gap-2">
              <Css3Icon class="w-5 h-5 text-blue-400" />
              <span class="font-mono text-blue-400 text-sm">CSS</span>
            </div>
            <MonacoEditor v-model="cssCode" lang="css" class="h-[400px]" :options="editorOptions" />
          </div>

          <!-- JavaScript -->
          <div class="border-2 border-yellow-500/30 rounded-lg overflow-hidden">
            <div class="bg-yellow-900/20 px-4 py-2 flex items-center gap-2">
              <RocketIcon class="w-5 h-5 text-yellow-400" />
              <span class="font-mono text-yellow-400 text-sm">JavaScript</span>
            </div>
            <MonacoEditor v-model="jsCode" lang="javascript" class="h-[400px]" :options="editorOptions" />
          </div>
        </div>

        <!-- Preview -->
        <div class="w-[50%] h-full">
          <div class="preview h-full">
            <iframe ref="iframe" sandbox="allow-scripts" class="w-full h-full border rounded-lg bg-white">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { renderHtml } from './utils'

// Reactive code inputs
const htmlCode = ref('<h1>Hola mundo</h1>')
const cssCode = ref('h1 { color: red; }')
const jsCode = ref("console.log('Hola desde JS')")

const iframe = ref<HTMLIFrameElement | null>(null)

// Escapar cierre de <script> para evitar problemas

// Actualizar preview en tiempo real
watchEffect(() => {
  console.log('[html]', htmlCode.value)
  console.log('[css]', cssCode.value)
  console.log('[js]', jsCode.value)
  if (!iframe.value) return

  const fullHtml = renderHtml(cssCode.value, htmlCode.value, jsCode.value)

  const doc = iframe.value.contentDocument
  if (doc) {
    doc.open()
    doc.write(htmlCode.value)
    doc.close()
  }
})

// Opciones comunes del editor
const editorOptions = {
  minimap: { enabled: true },
  automaticLayout: true,
  theme: 'vs-dark',
  readOnly: false,
}
</script>
