import supertest from "supertest";

const api = supertest('https://api.openweathermap.org/data/2.5');

const API_KEY = 'e393dcf1dbf0adbfc89af91e883c9809';
class WeatherDetails{
    async getWeatherDetailsViaName(name){
        const response = await api.get('/weather')
            .query({ q: name, appid: API_KEY });
        return response
    }
}

export default new WeatherDetails()