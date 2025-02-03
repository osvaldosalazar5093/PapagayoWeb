document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname;
  // Extraer solo el nombre de la página y la extensión .html
  const currentPageName = currentPage.substring(currentPage.lastIndexOf('/') + 1);
  
  if(currentPageName == 'service.html'){
      loadSlider('selectedService');
      localStorage.removeItem('selectedProperty');
  }
  
});


function setService(service) {
    switch(service) {
      case 'chef':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Private Chef',
          description: `Offers you delicious culinary experiences delivered to your doorstep. Our expert chefs create personalized menus with the highest gastronomic quality, ensuring unique flavors and presentations. Enjoy the convenience of an exclusive culinary experience in the comfort of your home or event, without having to worry about preparation or cleanup. Let us surprise you with exquisite flavors and unparalleled attention to detail.`,
          image: 'images/services/Chef/chef1.jpg',
          image2: 'images/services/Chef/chef2.jpg',
          background:'images/services/background/chef.jpg',image3: 'images/services/Chef/chef4.jpg',
          serv1: 'Private Chef',
  serv2: 'Customized Menus',
  serv3: 'Special Occasions',
  serv4: 'Wine Pairing',
  serv5: 'Seasonal Menus',
  serv6: 'Healthy Eating',
  serv7: 'Cocktail Parties',
  serv8: 'Catering Services',
  serv9: 'Event Catering'       }));
        break;
        
      case 'WaterTours':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Water Tours',
          description: `Offers you the opportunity to embark on exciting water adventures, exploring natural landscapes and underwater wonders. Discover hidden treasures beneath the waves and experience the thrill of aquatic exploration. Dive into adventure with "Water Tours" and create unforgettable memories on the water.`,
          image: 'images/services/Water-Tours1.jpg',
          image2: 'images/services/Water-Tours2.jpg',
          background:'images/services/background/background-water-tours.jpg',image3: 'images/services/Water-Tours3.jpg',
          options: ['Catamaran', 'Sea Ray Sedan Bridge', 'Fishing rods', 'Fairline targa'],
          serv1: 'Water Tours',
          serv2: 'Snorkeling Tours',
          serv3: 'Diving Expeditions',
          serv4: 'Boat Tours',
          serv5: 'Fishing Tours',
          serv6: 'Jet Ski Adventures',
          serv7: 'Kayak Excursions',
          serv8: 'Paddle Boarding Experience',
          serv9: 'Sunset Cruises'
        }));
        break;
      case 'LandTours':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Land Tours',
          description: `Offers you the opportunity to explore the diverse landscapes of Costa Rica with our guided tours. From lush rainforests teeming with wildlife to majestic volcanoes shrouded in mist, our tours allow you to experience the beauty of nature up close. Our experienced guides will lead you on unforgettable adventures, sharing their knowledge of the local flora, fauna, and culture along the way. Immerse yourself in the stunning natural beauty of Costa Rica with "Land Tours" and create memories that will last a lifetime.`,
          image: 'images/services/Land-Tours1.jpg',
          image2: 'images/services/Land-Tours2.jpg',
          background:'images/services/background/background-land-tours.jpg',image3: 'images/services/landtours.jpg',
          options: ['Palo Verde National Park', 'Buena Vista Extreme', 'Rincon de La Vieja National Park'],
          serv1: 'Natural Reserve Visits',
  serv2: 'Hiking Expeditions',
  serv3: 'Nature Walks',
  serv4: 'Volcano Tours',
  serv5: 'Wildlife Safaris',
  serv6: 'Cultural Immersions',
  serv7: 'Coffee Plantation Tours',
  serv8: 'Adventure Tours',
  serv9: 'Zip Line Adventures'
        }));
        break;
      case 'ExclusiveRentals':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Exclusive Rentals',
          description: 'What a better experience than staying in our luxurious and exclusive houses in CR, living in peace, rest, comfort, and more. We offer you the best houses according to your desires and needs, with the best views of the Pacific Ocean and the Gulf of Papagayo. With more than 30 beaches to explore and experience the best sunsets on the planet, your options are unlimited. A unique and incomparable experience in the tropical paradise of Costa Rica',
          image: 'images/home-puma/img-casa-puma-03.jpeg',
          image2: 'images/home-papagayo-paradise/img-casa-papagayoparadise-06.jpeg',
          background:'images/home-puma/img-casa-puma-05.jpeg',image3: 'images/home-puma/img-casa-puma-01.jpeg',
          options: [''],
          serv1: 'Internet24-hour concierge.',
          serv2: 'Daily cleaning.',
          serv3: 'Private chef.',
          serv4: 'Private transportation.',
          serv5: 'Laundry service.',
          serv6: 'Personalized shopping service.',
          serv7: 'Spa and wellness services.',
          serv8: 'Personalized entertainment.',
          serv9: 'Security services.'
        }));
        break;
      case 'RentACar':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Rent a Car',
          description: `Offers you the convenience of renting the perfect vehicle to enhance your stay in the Gulf of Papagayo, Costa Rica. Whether you're looking for a rugged 4x4 to explore the stunning natural landscapes or a sleek sedan for smooth city driving, we have a wide selection of vehicles to suit your needs. Our hassle-free rental process and competitive rates make it easy for you to get behind the wheel and embark on your Gulf of Papagayo adventure with confidence. Experience the freedom and flexibility of exploring this beautiful region at your own pace, knowing that you have a reliable rental car waiting for you.`,
          image: 'images/services/Rent-A-Car1.jpg',
          image2: 'images/services/Rent-A-Car2.jpg',
          background:'images/services/background/background-rent-a-car.jpg',image3: 'images/services/Rent-A-Car3.jpg',
          options: [''],
          serv1: 'Sedan Cars',
          serv2: 'SUV Cars',
          serv3: '4x4 Cars',
          serv4: 'Rental car insurance.',
          serv5: 'Luxury Cars',
          serv6: 'Economy Cars',
          serv7: 'Van Rentals',
          serv8: 'Roadside assistance.',
          serv9: 'Convenient pick-up and drop-off locations.'
        }));
        break;
      case 'Spa':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Spa',
          description: `Indulge in a world of relaxation and rejuvenation at our exquisite spa. Immerse yourself in tranquility as you experience a range of luxurious treatments designed to pamper your body and soothe your soul. From rejuvenating massages to revitalizing facials, our expert therapists will ensure you leave feeling refreshed and renewed. Enjoy the serene ambiance of our spa and discover a sanctuary where you can escape the stresses of everyday life. Experience the ultimate in pampering and wellness at our luxury spa.`,
          image: 'images/services/Spa1.jpg',
          image2: 'images/services/Spa2.jpg',
          background:'images/services/background/background-spa.jpg',image3: 'images/services/Spa3.jpg',
          options: ['Massage', 'Facial', 'Body Scrub', ' Manicure', 'Pedicure', 'Hair'],
          serv1: 'Massage Therapy',
          serv2: 'Facial Treatments',
          serv3: 'Body Treatments',
          serv4: 'Spa Packages',
          serv5: 'Manicures and Pedicures',
          serv6: 'Personal Trainer',
          serv7: 'Hydrotherapy',
          serv8: 'Aromatherapy',
          serv9: 'Yoga and Meditation Classes',

        }));
        break;
      case 'PersonalConcierge':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Personal Concierge',
          description: `We offer concierge services, which include reservations to restaurants both inside and outside of Peninsula Papagayo, as well the exclusive restaurant Castillo de Lilo, where you can enjoy one of the best sunsets of the pacific and private dinners with a tour and the history of this famous castle in Playa Potrero.
          We have one of the best chefs of Costa Rica at your disposal where you can enjoy the variety of traditional food from any part of the world, as well as our own country. We offer breakfast, lunch, dinners o the complete day with the chef.
          From grocery shopping, to make sure you have everything you need for your stay before you even arrive, to tours where you can get to see the nature of our country, volcanoes, rivers, beaches, fishing tours, we have many options to make your stay a trip you can’t forget. Including fun day in the ocean, where you can enjoy of the water toys in a tour inside Peninsula and have lunch in any of the beaches of our wonderful province. We also have available a private catamaran tour to see a beautiful sunset and much more, in this menu, you will be able to see many of the services we offer.
          Allow us to make your trip more delightful and relax during your vacations.`,
          image: 'images/services/Personal-Concierge1.jpg',
          image2: 'images/services/Personal-Concierge2.jpg',
          background:'images/services/background/background-personal-concierge.jpg',image3: 'images/services/Personal-Concierge3.jpg',
          options: ['Restaurant Reservations', 'Event Planning', 'Transportation Arrangements'],
          serv1: 'Airport transportation',
          serv2: 'Groceries',
          serv3: 'Water tours',
          serv4: 'Land tours',
          serv5: 'Private chef',
          serv6: 'Personal bartender/ waitress',
          serv7: 'Live music',
          serv8: 'Event planner',
          serv9: 'Spa, manicure, pedicure'
        }));
        break;
      case 'HomeManagement':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Home Management',
          description: `Encompasses a comprehensive array of services designed to ensure the seamless operation and upkeep of residential properties. From overseeing the payment of residential services to coordinating third-party services and managing home rentals, Home Management is dedicated to providing a complete solution for homeowners. Additionally, services such as preventive and corrective general maintenance, guest services, and coordination with external service providers are central to Home Management, ensuring that every aspect of your home is managed with care and efficiency.`,
          image: 'images/home-papagayo-paradise/img-casa-papagayoparadise-01.jpeg',
          image2: 'images/services/Home-Management2.jpg',
          background:'images/services/HomeManagement.jpg',image3: 'images/services/HomeManagement1.jpg',
          options: ['Property Maintenance', 'Rental Management', 'Cleaning Services'],
          serv1: 'Payment of Residential Services',
          serv2: 'Baby sitter',
          serv3: 'Home Rentals',
          serv4: 'General Maintenance',
          serv5: 'Guest Services',
          serv6: 'Coordination with External Service Providers',
          serv7: 'Property Upkeep',
          serv8: 'Home Security Monitoring',
          serv9: 'Home Cleaning Services'
        }));
        break;
      case 'PropertyManagement':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Property Management',
          description: `Involves overseeing all aspects of a property's maintenance and operations, ensuring it remains in optimal condition. "Preventive and corrective general maintenance" includes tasks such as remodeling, general cleaning, landscaping, fumigation, and pool maintenance.`,
          image: 'images/services/Property-Management1.jpg',
          image2: 'images/services/Property-Management2.jpg',
          background:'images/services/background/background-property-management.jpg',image3: 'images/home-papagayo-paradise/img-casa-papagayoparadise-01.jpeg',
          options: ['Marketing', 'Maintenance', 'Tenant Screening'],
          serv1: 'Remodeling',
          serv2: 'General Cleaning',
          serv3: 'Landscaping',
          serv4: 'Fumigation',
          serv5: 'Pool Maintenance',
          serv6: 'Property Inspections',
          serv7: 'Tenant Management',
          serv8: 'Rent Collection',
          serv9: 'Legal Compliance'
        }));
        break;
      default:
        console.error('Servicio no encontrado');
        break;
    }

    window.location.href = 'service.html';
  }
  