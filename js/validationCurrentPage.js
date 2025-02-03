document.addEventListener('DOMContentLoaded', function() {

  const serviceSessionStarted = localStorage.getItem('serviceSessionStarted');

  const selectedService = localStorage.getItem('selectedService');

  const selectedProperty = localStorage.getItem('selectedProperty');

  // Obtener la ruta de la página actual
  const currentPage = window.location.pathname;
  // Extraer solo el nombre de la página y la extensión .html
  const currentPageName = currentPage.substring(currentPage.lastIndexOf('/') + 1);
  
  if (currentPageName == 'index.html') {
    console.log('entradno')

  }
  
  if (currentPageName === 'service.html') {
    // Lógica de validación para la página service.html
    if (serviceSessionStarted !== 'true' && !selectedService || !selectedService) {
      window.location.href = 'services.html';
      localStorage.setItem('serviceSessionStarted', 'true');
    } else if (selectedService) {
      //console.log('Sesión de servicio encontrada', JSON.parse(selectedService));
    }
  } 
  
  if (currentPageName === 'property-single.html') {
    // Lógica de validación para la página property-single.html
    if (serviceSessionStarted !== 'true' && !selectedProperty || !selectedProperty) {
      window.location.href = 'index.html';
      localStorage.setItem('serviceSessionStarted', 'true');
    }

  }
  if (currentPageName == 'index.html') {
    localStorage.removeItem('selectedService');
  }
  

  
});

