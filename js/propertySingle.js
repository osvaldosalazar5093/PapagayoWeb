document.addEventListener('DOMContentLoaded', async function() {
  const btn = document.querySelector('#btn-plan');
  const icon = document.querySelector('.plan');
  const currentPage = window.location.pathname;
  const currentPageName = currentPage.substring(currentPage.lastIndexOf('/') + 1);

  if (currentPageName === 'property-single.html') {
      loadSlider('selectedProperty');
      localStorage.removeItem('selectedService');
      const selectedProperty = JSON.parse(localStorage.getItem('selectedProperty'));

      if (selectedProperty.salesType === 'sale') {
          btn.classList.remove('plan');
          icon.classList.remove('plan');
      } else {
          btn.classList.add('plan');
          icon.classList.add('plan');
      }

      document.getElementById('property-name').innerHTML = selectedProperty.name;
      document.getElementById('property-title').innerHTML = selectedProperty.title;
      document.getElementById('property-title2').innerHTML = selectedProperty.name;
      document.getElementById('property-description').innerHTML = selectedProperty.description;
      document.getElementById('background-image').style.backgroundImage = `url("${selectedProperty.backgroundImage}")`;

      const jsonUrl = 'data/properties/amenities.json';
      fetch(jsonUrl)
          .then(response => response.json())
          .then(data => generatePropertyDetails(data[selectedProperty.id]))
          .catch(error => console.error('Error loading JSON:', error));
  }
});

async function generatePropertyDetails(propertyData) {
    const propertyDetailsContainer = document.getElementById('propertyDetails');
  
    for (let category in propertyData) {
        if (propertyData.hasOwnProperty(category)) {
            const colDiv = document.createElement('div');
            // Agregar clases de Bootstrap para columnas responsivas
            colDiv.classList.add('col-lg-2', 'col-md-4', 'col-sm-6', 'col-6');
  
            const categoryTitle = document.createElement('h5');
            categoryTitle.textContent = category;
            colDiv.appendChild(categoryTitle);
  
            const categoryList = document.createElement('ul');
  
            for (let prop in propertyData[category]) {
                if (propertyData[category].hasOwnProperty(prop)) {
                    const listItem = document.createElement('li');
                    listItem.textContent = propertyData[category][prop];
                    categoryList.appendChild(listItem);
                }
            }
  
            colDiv.appendChild(categoryList);
            propertyDetailsContainer.appendChild(colDiv);
        }
    }
  }
  
async function setProperty(property) {
  switch(property) {
      case 'property1':
          localStorage.setItem('selectedProperty', JSON.stringify({
              id: property,
              salesType: 'rental',
              title: 'Exclusive Property',
              name: 'Península Papagayo Paradise',
              description: `<p class="text-start">Equally <strong>ideal for a large family group as for a group of couples</strong>, delights our guests. With <b>5 suites for children</b>, plus a kid’s 'fort' room with queen bed, and <strong>5 full bathrooms and 2 half baths </strong>, <strong>your group of up to 12 guests will have space to spread out and relax</strong>. </p>
                  <p>The large estate has substantial outdoor living options, with additional under-roof dining and relaxing options. <strong>Enjoy cocktail hour or dinner out at the gazebo, perched cliffside with beautiful sunset views</strong>. Or enjoy one of the 8 lounge chairs situated around the organically shaped pool (no straight lines!), complete with a shallow kid’s section. Puesta del Sol features a king master suite, with an enormous bathroom and walk-in closets. <strong>There are an additional two king suites, and two queen suites, plus the aforementioned 'fort'.</strong></p>`,
              backgroundImage: 'images/home-papagayo-paradise/img-casa-papagayoparadise-04.jpeg',
              image: 'images/home-papagayo-paradise/img-casa-papagayoparadise-01.jpeg',
              image2: 'images/home-papagayo-paradise/img-casa-papagayoparadise-02.jpeg',
              image3: 'images/home-papagayo-paradise/img-casa-papagayoparadise-03.jpeg',
              image3: 'images/home-papagayo-paradise/img-casa-papagayoparadise-04.jpeg',
              image4: 'images/home-papagayo-paradise/img-casa-papagayoparadise-05.jpeg',
              image5: 'images/home-papagayo-paradise/img-casa-papagayoparadise-06.jpeg',
              image6: 'images/home-papagayo-paradise/img-casa-papagayoparadise-08.jpeg',
              image7: 'images/home-papagayo-paradise/img-casa-papagayoparadise-10.jpeg'
          }));
          break;
      case 'property2':
          localStorage.setItem('selectedProperty', JSON.stringify({
              id: property,
              salesType: 'sale',
              title: 'Exclusive Property',
              name: ' Casa Puma',
              description: `<p>Explore <strong>Casa Puma</strong>, a luxurious vacation retreat nestled in Costa Rica's stunning Papagayo Peninsula. Set against the backdrop of an <strong>Arnold Palmer-designed golf course</strong>, this custom home offers unparalleled elegance and comfort for your getaway.</p>
                  <p>With <strong>breathtaking views</strong> and spacious accommodations for <strong> up to 12 guests </strong>, Casa Puma is the perfect blend of tranquility and sophistication. Spend your days lounging by the <strong>private pool</strong> or exploring the nearby attractions, including renowned restaurants and pristine beaches.</p>
                  <p>Indulge in <strong>24/7 concierge services</strong> and a host of optional amenities, from <strong>private chef services</strong> to exciting water sports activities. Whether you're seeking relaxation or adventure, Casa Puma promises an unforgettable vacation experience unlike any other.</p>`,
              backgroundImage: 'images/home-puma/img-casa-puma-view-gathering-06.jpeg',
              image: 'images/home-puma/img-casa-puma-02.jpeg',
              image2: 'images/home-puma/img-casa-puma-view-gathering-06.jpeg',
              image3: 'images/home-puma/img-casa-puma-view-gathering-04.jpeg',
              image4: 'images/home-puma/img-casa-puma-view-gathering-05.jpeg',
              image5: 'images/home-puma/img-casa-puma-view-gathering-02.jpeg',
              image6: 'images/home-puma/img-casa-puma-view-gathering-03.jpeg',
              image7: 'images/home-puma/img-casa-puma-view-gathering-08.jpeg',
              image8: 'images/home-puma/img-casa-puma-bed-bath-01.jpeg',
              image9: 'images/home-puma/img-casa-puma-bed-bath-02.jpeg',
              image10: 'images/home-puma/img-casa-puma-bed-bath-03.jpeg',
              image11: 'images/home-puma/img-casa-puma-bed-bath-04.jpeg',
              image12: 'images/home-puma/img-casa-puma-bed-bath-05.jpeg',
              image13: 'images/home-puma/img-casa-puma-bed-bath-06.jpeg',
              image14: 'images/home-puma/img-casa-puma-bed-bath-07.jpeg',
          }));
          break;
      default:
          console.error('Propiedad no encontrada');
          break;
  }

  window.location.href = 'property-single.html';
}
