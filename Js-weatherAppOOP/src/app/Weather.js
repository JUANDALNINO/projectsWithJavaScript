export class Weather {

    constructor(city, CountryCode) {
        this.apiKey = '956844ed72de6bca19bf2a10295fa921';
        this.city = city;
        this.CountryCode = CountryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.CountryCode}&appid=${this.apiKey}&units=metric`;

        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}