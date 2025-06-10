async function getWeather() {
    const location = document.getElementById("locationInput").value.trim();
    const resultDiv = document.getElementById("result");
  
    if (!location) {
      resultDiv.textContent = "Please enter a location.";
      return;
    }
  
    const apiKey = "7f14be026a2d4658978203334251006";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Location not found");
  
      const data = await response.json();
      const tempC = data.current.temp_c;
      resultDiv.innerHTML = `
        <strong>${data.location.name}, ${data.location.country}</strong><br/>
        Temperature: ${tempC}&#8451;<br/>
        Condition: ${data.current.condition.text}
      `;
    } catch (error) {
      resultDiv.textContent = "Error fetching weather data. Please try again.";
    }
  }
