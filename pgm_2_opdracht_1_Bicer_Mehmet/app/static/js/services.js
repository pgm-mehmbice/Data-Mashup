function GitHubApi () {
  this.getSearchUsers = async (name) => {

  },

  this.getReposOfUser = async (username) => {

  },

  this.getFollowersOfuser = async (username) => {

  },

  this.getSubsciptionsOfUser = async (username) => {

  }
}

function UsersApi () {
  this.getUsers = async () => {
    return new Promise(
      (resolver,reject) => {
        fetch(` https://api.github.com/search/users?sort=desc&page=1&per_page=100&q=${name}`)
        .then(response => response.json())
        .then(json => resolver(json))
        .catch(err => reject(err));
      }
    );
  }
}

function WeatherApi () {
  this.getCurrentWeather = async (city) => {
    return new Promise(
      (resolver,reject) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}/`)
        .then(response => response.json())
        .then(json => resolver(json))
        .catch(err => reject(err));
      }
    );
  }
}

function GhentOpenDataApi () {
  this.gerCovidPostiveCases = async () => {
    return new Promise(
      (resolver,reject) => {
        fetch(`https://data.stad.gent/api/records/1.0/search/?dataset=dataset-of-cumulative-number-of-confirmed-cases-by-municipality&q=`)
        .then(response => response.json())
        .then(json => resolver(json))
        .catch(err => reject(err));
      }
    );
  }
}