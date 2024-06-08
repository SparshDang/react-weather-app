export const getCoordinates = async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

export const getCurrentData = async (currentCoords) => {
  console.log(process.env.REACT_APP_WEATHER_API_KEY)
    const request = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${currentCoords.join()}`,
        {
          headers: {
            key:process.env.REACT_APP_WEATHER_API_KEY,
          },
        }
      );
      const response = await request.json();
      return response;
}