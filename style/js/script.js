// Popularity Line Chart
const years = [2017,2018,2019,2020,2021,2022,2023];
const players = [30,78.3,75.5,80.4,83.3,85,90];

new Chart("popChart", {
  type: "line",
  data: {
    labels: years,
    datasets: [{
      backgroundColor:"#ffffff",
      borderColor: "#f3af19",
      data: players
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
      }
    }
  }
});

// Fortnite Skins API
const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://fortniteskins.p.rapidapi.com/',
  params: {Name: 'Jonsey', Price: '800', Rarity: 'Epic', Source: 'Shop'},
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'ffed1289ffmsh83cfed6f9f2a410p15dd43jsna9795d185233',
    'X-RapidAPI-Host': 'fortniteskins.p.rapidapi.com'
  },
  data: '{"key1":"value","key2":"value"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});