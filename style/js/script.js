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

// Fortnite Character Generator
const characterArray = [
  "style/images/characters/fortnite-outfit-Leon-S-Kennedy.webp",
  "style/images/characters/fortnite-outfit-Claire-Redfield.webp",
  "style/images/characters/fortnite-outfit-aerial-asault-trooper.webp",
  "style/images/characters/fortnite-outfit-astra.webp",
  "style/images/characters/fortnite-outfit-Band-Pass.webp",
  "style/images/characters/fortnite-outfit-brite-bomber.webp",
  "style/images/characters/fortnite-outfit-fishstick.webp",
  "style/images/characters/fortnite-outfit-peely.webp"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(characterArray);

button.addEventListener("click", () => generateRandomPicture(characterArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}