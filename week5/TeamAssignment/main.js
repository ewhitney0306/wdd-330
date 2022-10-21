import {hike} from './hikes.js';

const hikeList = new Array()

const bechlerFalls = new hike("Bechler Falls",
"falls.jpg",
"Image of Bechler Falls",
"3 miles",
"Easy",
"Beautiful short hike along the Bechler river to Bechler Falls",
"Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
);

const tetonCanyon = new hike("Teton Canyon",
"falls.jpg",
"Image of Bechler Falls",
"3 miles",
"Easy",
"Beautiful short (or long) hike through Teton Canyon.",
"Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
);

const denandaFalls = new hike("Denanda Falls",
"falls.jpg",
"Image of Bechler Falls",
"7 miles",
"Moderate",
"Beautiful hike through Bechler meadows river to Denanda Falls",
"Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
);

hikeList.push(bechlerFalls, tetonCanyon, denandaFalls);

  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    showHikeList();  
  });
  
  function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikeList, hikeListElement);
  }
  
  function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike));
    });
    showAndHide();
  }
  function renderOneHike(hike) {
    const item = document.createElement("li");
  
    item.innerHTML = ` <h2 class="collapsible">${hike.name}</h2>
        <div class="hikeInfo">
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div class='hikeStats'>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>
          </div>`;
  
    return item;
  }

  function showAndHide(){
    let coll= document.getElementsByClassName("collapsible");
    console.log(coll.length);

    for(let i = 0; i < coll.length; i++){
      console.log(coll[i]);
      coll[i].addEventListener("click", function(){
        console.log(this);
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
