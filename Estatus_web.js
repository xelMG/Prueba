fetch('https://upy.edu.mx')
  .then(response => {
    console.log(`El código de estado de la respuesta es: ${response.status}`);
    console.log(`El mensaje de estado de la respuesta es: ${response.statusText}`);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });