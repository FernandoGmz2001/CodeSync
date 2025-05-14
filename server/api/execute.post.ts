export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const response = await fetch(
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true&fields=*",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "bcd91c27b8mshd1cde4ad7478eb9p14301djsn9e1627743409",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      body: JSON.stringify({
        source_code: body.code,
        language_id: body.language_id,
      }),
    },
  );

  const result = await response.json();
  return result;
});
