// Popularity Line Chart

new Chart("popChart", {
  type: "line",
  data: {
    labels: ['2017','2018','2019','2020','2021','2022','2023'],
    datasets: [{
      backgroundColor:"black",
      borderColor: "#f3af19",
      label: 'Popularity Over Time',
      data: [30,78.3,75.5,80.4,83.3,85,90],
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