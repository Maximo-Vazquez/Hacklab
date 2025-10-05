(async () => {
  try {
    const contenido_text = 'esto es un comentario super interesante';

    const body = new URLSearchParams();
    body.append('content', contenido_text);
    const resp = await fetch('/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body.toString(),
      credentials: 'same-origin'
    });
    const text = await resp.text();
  } catch (err) {
    console.error(err);
  }
})();