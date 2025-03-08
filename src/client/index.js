import { getCityData, getWeather, getImage } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// Registering a service worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// Handling button click to fetch and display city data, weather, and images
document.getElementById('Btn').addEventListener('click', async () => {
    const cityData = await getCityData();
    const weatherData = await getWeather();
    const imageUrl = await getImage();

    if (cityData) {
        document.getElementById('cityData').innerText = `Latitude: ${cityData.latitude}, Longitude: ${cityData.longitude}, Country: ${cityData.country}`;
    }
    if (weatherData) {
        document.getElementById('weatherData').innerText = weatherData;
    }
    if (imageUrl) {
        document.getElementById('cityImage').src = imageUrl;
        document.getElementById('cityImage').alt = "Image of " + cityData.cityName;
    } else {
        document.getElementById('cityImage').src = '';
        document.getElementById('cityImage').alt = 'No image available';
    }
});
