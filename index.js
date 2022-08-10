
const Url = "https://serpapi.com/search.html?engine=google&q=Coffee&location=Lagos%2C+Lagos%2C+Nigeria&google_domain=google.com.ng&gl=ng&hl=en&api_key=bcfc04686ef6a7ca4ff759434002ae01bd9599de65b70ae4c5d743b4bc96d0bc.htaccess";
const Display = document.getElementById("result");
const xhr = new XMLHttpRequest();

xhr.open('GET', Url);


const Btn = document.getElementById("btn-search");
// const params = {
//     engine: "google",
//     google_domain: "google.com",
//     gl: "us",
//     hl: "en",
//     location: "Austin, Texas, United States"
//   };
  
//   const callback = function(data) {
//     console.log(data);
//   };
  
//   // Show result as JSON
//   search.json(params, callback);
     
 
Btn.addEventListener("click", () => {
    let Inputword = document.getElementById("search-key").value;
//    Testing
    console.log(Inputword);

    fetch(`${xhr}${Inputword}`).then((response) => response.json()).then((data) => { console.log(data)
        Display.innerHTML = `
         <div class="result">
          <h3>${data[0]}</h3>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
            <p class="word_meaning">
               ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="example">Example</p>
            <p class="word_example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </p>
        `
     }).catch(() => {
       Display.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`
     })

    

})




// https://api.thruuu.com/api/v1/scrape-url?apikey=YOUR_API_KEY&url=https://samuelschmitt.com/what-is-a-topic-cluster&language=en
// https://serpapi.com/searches/685ee5391eaf1f2c/62ed11dbd737d78dc0d1c543.json
// https://serpapi.com/search.html?engine=google&q=Coffee&location=Austin%2C+Texas%2C+United+States&google_domain=google.com&gl=us&hl=en&api_key=bcfc04686ef6a7ca4ff759434002ae01bd9599de65b70ae4c5d743b4bc96d0bc