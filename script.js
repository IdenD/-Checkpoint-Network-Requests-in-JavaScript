document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = '415feb371f18105b46c6583624c29ef3'; // 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    if (city === "") {
        alert('Veuillez entrer une ville.');
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city').textContent = data.name;
                document.getElementById('temperature').textContent = data.main.temp;
                document.getElementById('description').textContent = data.weather[0].description;
            } else {
                alert('Ville non trouvée');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Erreur de récupération des données météo');
        });
});
