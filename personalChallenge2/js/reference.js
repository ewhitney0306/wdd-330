let favList = JSON.parse(localStorage.getItem('favCountryList'));

window.addEventListener("load", function(){
    showCountryList();
});

function showCountryList(){
    const countryListDisplay = document.getElementById("favCountryList");
    countryListDisplay.innerHTML = "";
    renderCountryList(countryListDisplay);
}

function renderCountryList(countryListDisplay){
    favList.forEach(element => {
        countryListDisplay.appendChild(renderOneCountry(element));        
    });
    showAndHide();
}

function renderOneCountry(country){
    const item = document.createElement("li");

    let languages = JSON.stringify(country.languages).split(",");
    let formattedLanguages = new Array();

    languages.forEach(language =>{
        language.toString();
        language = language.replaceAll('"', "");
        language = language.replace("{", "");
        language = language.replace("}", "");
        language = language.slice(4);
        formattedLanguages.push(language);
    });


     let innerHtml= `<h2 class="collapsible">${country.name}</h2>
    <div class="countryInfo">
        <div class="countryFlagDiv">
            <img class="countryFlag" src="${country.flag}" alt="Picture of the flag of ${country.name}">
        </div>
        <div class="countryStats">
            <div>
                <h3>Country Capital</h3>
                <p>${country.capital}</p>
            </div>
            <div>
                <h3>Country Population</h3>
                <p>${country.population.toLocaleString("en-US")}</p>
            </div>
            <div>
                <h3>Country Languages</h3>`;

                formattedLanguages.forEach(language =>{
                    innerHtml += `<p>${language}</p>`
                })

        innerHtml +=`</div>
            <div>
                <h3>Country Continent</h3>
                <p>${country.continents}</p>
            </div>
        </div>
    </div>`;


    item.innerHTML= innerHtml;
    return item;
}

function showAndHide(){
    let coll= document.getElementsByClassName("collapsible");
    console.log(coll.length);

    for(let i = 0; i < coll.length; i++){
      console.log(coll[i]);
      coll[i].addEventListener("click", function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if(content.style.display === "flex"){
          content.style.display = "none";
        } else {
          content.style.display = "flex";
        }
      });
    }
  }