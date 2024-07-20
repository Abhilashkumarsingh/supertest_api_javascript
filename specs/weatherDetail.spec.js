import { describe } from "mocha";
import { expect } from "chai"
import createTestData from "../utility/convertCSVToJsObject.js";
import sortData from "../utility/sortData.js";
import weatherDetails from "../request/WeatherDetails.js";


describe('OpenWeather API Tests', () => {
    let location,statusCode
    it('should return current weather data for a city by name', async () => {
        /**
         * to city name can be case insensitive
         * to validate weather details for city is fetched for correct and incorrect cities name*/
        let cityDetailsTestData=createTestData('./testData/cityDetails.csv')
        for(const city of cityDetailsTestData){
            location= city.split(",")[0]
            statusCode=parseInt(city.split(",")[1])
            
            const response = await weatherDetails.getWeatherDetailsViaName(location)
            expect(response.status).to.equal(statusCode);
        }

    });

    it('should sort city via increasing temperature', async () => {
        /**
         * sorting city on the basis of increasing temperature
         */
        let temperatureList={}
        let cityDetailsTestData=createTestData('./testData/cityDetails.csv')
        for(const city of cityDetailsTestData){
            location= city.split(",")[0]
            statusCode=parseInt(city.split(",")[1])
            const response = await weatherDetails.getWeatherDetailsViaName(location)
            if(response.status==200){
                temperatureList[location]=response.body.main.temp
            }
        }
        let result= sortData.sortIncreasingOrder(temperatureList)
        expect(result).not.null
        
    });       
});
