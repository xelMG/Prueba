fetch('https://upy.edu.mx')
  .then(response => {
    console.log(`El código de estado de la respuesta es: ${response.status}`);
    console.log(`El mensaje de estado de la respuesta es: ${response.statusText}`);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
// Función asíncrona para realizar la solicitud
async function fetchStatus() {
  try {
    // Realiza la solicitud a la URL especificada
    const response = await fetch('https://upy.edu.mx');
    
    // Imprime el código de estado de la respuesta
    console.log(`El código de estado de la respuesta es: ${response.status}`);
    
    // Imprime el mensaje de estado de la respuesta
    console.log(`El mensaje de estado de la respuesta es: ${response.statusText}`);
  } catch (error) {
    // Captura e imprime cualquier error que ocurra durante la solicitud
    console.error('Error al realizar la solicitud:', error);
  }
}

// Llama a la función para ejecutar la solicitud
fetchStatus();

