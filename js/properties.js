document.addEventListener('DOMContentLoaded', async function() {

  fetch('data/properties/properties.json')
    .then(response => response.json())
    .then(data => {

      generatePropertiesHTML(data);
      SliderProperty();

    })
    .catch(error => {
      console.error("Error loading the JSON file or generating properties: ", error);
    });
});

async function generatePropertiesHTML(properties) {
  const container = document.getElementById('properties-container');
  container.innerHTML = ''; // Limpiar el contenedor por si tiene contenido previo
  properties.forEach(property => {
    const propertyItem = document.createElement('div');
    propertyItem.className = 'property-item';
    propertyItem.innerHTML = `
    <div class="property-overlay">
      <span class="sale-type">${property.saleType}</span>
      <a onclick="setProperty('${property.id}')" class="img">
        <img src="${property.imageSrc}" alt="Image" class="img-fluid-property" />
      </a>
    </div>
    <div class="property-content">
    <span class="city d-block mb-3 text-center">${property.name}</span>
        <div class="specs d-flex mb-4 text-center justify-content-center">
          <span class="d-block d-flex align-items-center me-3">
            <span class="icon-slider"><img src="icons/bed.png"/></span>
            <span class="caption">${property.beds} beds</span>
          </span>
          <span class="d-block d-flex align-items-center me-2">
          <span class="icon-slider"><img src="icons/bath.png"/></span>
            <span class="caption">${property.baths} baths</span>
          </span>
          <span class="d-block d-flex align-items-center me-2">
          <span class="icon-slider"><img src="icons/area.png"/></span>
            <span class="caption">${property.area} sqft</span>
          </span>
        </div>
        <a onclick="setProperty('${property.id}')"  class="btn btn-primary btn-center py-2 px-3">Learn More</a>
      </div>
    </div>
    `;
    container.appendChild(propertyItem);
  });

}


let SliderProperty = async function(){
  let propertySlider = document.querySelectorAll('.property-slider');
  
  if (propertySlider.length > 0) {
    let tnsSlider = tns({
      container: '.property-slider',
      mode: 'carousel',
      speed: 700,
      gutter: 30,
      items: 1,
      autoplay: true,
      controls: true,
      autoplayButtonOutput: false,
      controls: true,
      nav:false,
      controlsContainer: '.container-next-prev',
      responsive: {
        0: {
          items: 1
        },
        700: {
          items: 2
        },
        900: {
          items: 2
        }
      }
    });
  }
}
