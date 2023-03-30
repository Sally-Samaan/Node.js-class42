import express from "express";
import fetch from "node-fetch";
import { keys } from "./sources/keys.js";

const app = express();

const weatherPath = "https://api.openweathermap.org/data/2.5/weather";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend to frontend");
});

app.post("/weather", async (req, res) => {
  const weather = {
    cityName: req.body.cityName,
  };

  const response = await fetch(
    `${weatherPath}q=${weather.cityName}&units=metric&APPID=${keys.API_KEY}`
    );
    const data = await response.json();
  
    const cityWeather = { weatherText: `` };
  
    if (data["cod"] !== 200) {
      cityWeather.weatherText = `City is not found`;
      res.status(404);
      res.send(cityWeather);
    } 
    else {
      const temp = data["main"]["temp"];
      cityWeather.weatherText = `The temperature in ${weather.cityName} is ${temp} \u00B0C`;
      res.status(200);
      res.send(cityWeather);
    }
  });
  
  export default app;
