import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      selectedCountry: {},
      favourites: []
    },
    methods: {
      addFavourite: function(){
        this.favourites.push(this.selectedCountry);
        console.log(this.favourites);
      },
      fetchCountries: function(){
        // request is a promise object
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          this.countries = data;
          console.log(this.countries);
          // any subsequent dependant functions has to happen here
        });
      }
    },
    computed: {
      totalPopulation: function (){
        return this.countries.reduce((runningTotal, country) =>
      runningTotal + country.population, 0);
      }
    },
    mounted() {
      console.log('loaded');
      this.fetchCountries()
    }
  })
});
