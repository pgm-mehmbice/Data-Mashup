const GET_WEATHER_GENT_API = ('http://api.weatherapi.com/v1/current.json?key=5f22231171014112810134826202112&q=$Ghent/');
const AANTAL_COVID_GENT_API = ('https://data.stad.gent/api/records/1.0/search/?dataset=dataset-of-cumulative-number-of-confirmed-cases-by-municipality&q=');
const OPLIJST_VAN_GITHUB_API = ('https://api.github.com/search/users?sort=desc&page=1&per_page=100&q=${name}');
const REPOSITORIES_API = ('https://api.github.com/users/${username}/repos?page=1&per_page=50');
const FOLLOWERS_API = ('https://api.github.com/users/${username}/followers?page=1&per_page=100');
// const _API = ('');
// const _API = ('');

void(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
    },

    cacheElements() {
      console.log("2. Chache all exisiting DOM elements!");
      this.$covid = document.querySelector('.covidCases');
      this.$weather = document.querySelector('.weather');
      this.$ = document.querySelector('.users');
      // this.$ = document.querySelector('.');
      // this.$ = document.querySelector('.');
      // this.$ = document.querySelector('.');
      // this.$ = document.querySelector('.');
    },

    // VOORBEELD HIER.
    // async fetchWeather() {
    //    fetch (GET_WEATHER_GENT_API, {}) 
    //   .then(response => response.json())
    //   .then(json => updateWeather(json))
    //   .catch(error => console.log(error))
    // },
    // updateWeather (weather) {
    //   console.log('update weather');
    //   let tempStr = '';

    //   weather.forEach(weather => {
    //     tempStr += `
    //     ${weather.image}`
    //   });
    // return
    // },

    registerListeners () {
      fetch (_API, {}) 
      .then(response => response.json())
      .then(json => updateUserDetails(json))
      .catch(error => console.log(error))
    },
    updateUserDetails (username) {

    },
    
    async fetchGhentCovidPostiveCases() {
        fetch (AANTAL_COVID_GENT_API, {}) 
      .then(response => response.json())
      .then(json => updateCovid(json))
      .catch(error => console.log(error))
    },
    updateGhentCovidPostiveCases (covidCases) {
      console.log('update covid');
      let tempStr = '';

      tempStr += `<div class="covid-number">
      <p>${covidCases}</p>      
      </div>`
      return this.$covid.innerHTML = tempStr;
    },

    async fetchWeather() {
        fetch (GET_WEATHER_GENT_API, {}) 
      .then(response => response.json())
      .then(json => updateWeather(json))
      .catch(error => console.log(error))
    },
    updateWeather (weather) {
      console.log('update weather');
      let tempStr = '';  

      tempStr += `<div class="weather">
      <p>${weather}</p>
      <img src="../media/images/wolk.png">
      </div>`
      return this.$weather.innerHTML = tempStr;
    },
    
    async fetchUsers () {
      const usersApi = new UsersApi();
      const users = await usersApi.getUsers();
      this.updatePGMUsersList(users);
    },
    updatePGMUsersList (users) {
      console.log('update PGM Users List');
      let tempStr = '';  

      tempStr += `<div class="pgm-users-list"><p>${users}</p></div>`
      return this.$users.innerHTML = tempStr;
    },

    async fetchUsersByName (name) {

    },
    updateGHUsersList (users) {

    },

    async fetchDatailsOfUsers (username) {

    },
    updateUserRepositoriesList (repos) {

    },

    updateUserFollowersList (followers) {

    },

    getLinkHTML (size = 32) {

    }

  }
  app.initialize();
})();