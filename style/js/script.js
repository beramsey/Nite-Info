// Youtube API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffed1289ffmsh83cfed6f9f2a410p15dd43jsna9795d185233',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

const userInput = document.querySelector("input");
const btn = document.querySelector("button");

let params = ''
const callParams = () => {
    params = userInput.value
     fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${params}?_limit=5`, options)
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.items.slice(0,5).map(item => {
              output += `
             <h1>${item.title}</h1>
              <li>
               <a href="${item.url}">${item.url}</a>
              </li>`;
           })
            document.querySelector('.result').innerHTML = output;
        })
        .catch(err => console.error(err));
    userInput.value = '';
}


btn.addEventListener('click', callParams)

// Popularity Line Chart
new Chart("popChart", {
  type: "line",
  data: {
    labels: ['2017','2018','2019','2020','2021','2022','2023'],
    datasets: [{
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

window.onload = () => generateRandomPicture(characterArray);

button.addEventListener("click", () => generateRandomPicture(characterArray));

function generateRandomPicture(array){
    let randomNum = Math.floor(Math.random() * array.length); 
    image.setAttribute("src", array[randomNum]);
}