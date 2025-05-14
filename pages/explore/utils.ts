function escapeScript(code: string) {
  return code.replace(/<\/script>/gi, "<\\/script>");
}

export const renderHtml = (css: string, html: string, js: string) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script type="text/javascript">
          try {
            ${js}
          } catch(e) {
            console.error(e);
          }
        <\/script>
      </body>
    </html>
  `;
};
