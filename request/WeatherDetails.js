import supertest from "supertest";
import envSec from "../utility/envSec.js";

const api = supertest('https://api.openweathermap.org/data/2.5');

const API_KEY = envSec.api_key
class WeatherDetails{
    async getWeatherDetailsViaName(name){
        const response = await api.get('/weather')
            .query({ q: name, appid: API_KEY });
        return response
    }
}

export default new WeatherDetails()