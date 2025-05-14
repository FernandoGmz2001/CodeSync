function fromBase64(str: string): string {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch {
    return str;
  }
}

export const useCodeExecution = () => {
  const executeCode = async (code: string): Promise<string> => {
    try {
      const codeBase64 = btoa(unescape(encodeURIComponent(code)));

      const result = await $fetch("/api/execute", {
        method: "POST",
        body: {
          code: codeBase64,
          language_id: 74, // TypeScript
        },
      });

      // 🔁 Decodificar salidas si existen
      const stdout = result.stdout ? fromBase64(result.stdout) : "";
      const stderr = result.stderr ? fromBase64(result.stderr) : "";
      const compileOutput = result.compile_output
        ? fromBase64(result.compile_output)
        : "";

      if (stderr) return `Error:\n${stderr}`;
      if (compileOutput) return `Compilación:\n${compileOutput}`;
      return stdout || "Sin salida";
    } catch (error: any) {
      return `Error al ejecutar:\n${error.message || error}`;
    }
  };

  return { executeCode };
};
