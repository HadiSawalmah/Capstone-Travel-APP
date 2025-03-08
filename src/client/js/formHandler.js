
    // Function to fetch city data using the GeoNames API
    async function getCityData() {
    const cityName = document.getElementById('countryNameInput').value.trim();
    console.log("Enter to first function");
    const username = 'capstone20';
    const url = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=1&username=${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data.geonames.length > 0) {
            const cityData = data.geonames[0];
            const latitude = cityData.lat;
            const longitude = cityData.lng;
            const country = cityData.countryName;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Country: ${country}`);
            return { latitude, longitude, country, cityName };
        } else {
            console.log(`No results found for city: ${cityName}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
    }

// Function to fetch weather data using the Weatherbit API

    async function getWeather() {
    console.log("Enter to second function");
    const cityName = document.getElementById('countryNameInput').value;
    const tripDate = document.getElementById('dateInput').value;
    const apiKey = '57efcb3c255949dfbcdbc37d56f5d622';
    const baseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const url = `${baseUrl}?city=${cityName}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const tripDateObj = new Date(tripDate);
        const weatherData = data.data.find(day => new Date(day.datetime).toDateString() === tripDateObj.toDateString());

        if (weatherData) {
            const { temp, weather, datetime } = weatherData;
            return `Weather on ${datetime} in ${cityName}: Temperature: ${temp}°C, Conditions: ${weather.description}`;
        } else {
            return `No weather data available for ${tripDate} in ${cityName}.`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
    }

// Function to fetch an image from Pixabay API based on the city name

    async function getImage() {
    console.log("Enter to third function");
    const cityName = document.getElementById('countryNameInput').value;
    const apiKey = '45765855-7106564c167e315fcb4d954b9';
    const baseUrl = 'https://pixabay.com/api/';
    const query = encodeURIComponent(cityName);
    const url = `${baseUrl}?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.hits && data.hits.length > 0) {
            const imageUrl = data.hits[0].webformatURL;
            return imageUrl;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching image data:', error);
        return null;
    }
    }

    export { getCityData, getWeather, getImage };
