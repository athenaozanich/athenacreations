//Wait for document to be ready
let projectCards = [];
let vertPortWrapper = document.querySelector(".vert-wrapper");
let projectCard;
let parsedProjectCard;
let modal;
//get data from db
fetch('js/portData.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    //store data array
    let projects = myJson.portItems;
    //console.log(projects);
    //loop through data
    for (var i = 0; i < projects.length; i++) {
      //create variable for project card
     projectCard =
      `<section class="port-item card__${i}">
        <span class="close">X</span>
          <a href="${projects[i].url}">
            <h6>${projects[i].name}</h6>
          </a>
          <img src="imgs/${projects[i].img}" alt="${projects[i].name}"/>
          <aside>
            <p>
              ${projects[i].desc}
            </p>
          </aside>
          <span>Click to expand<span/>
       </section>`;
    //parse string into html
    parsedProjectCard = $.parseHTML(projectCard);
    projectCards.push(parsedProjectCard[0]);
    //append card to DOM
    vertPortWrapper.appendChild(projectCards[i]);
    }
  assignListeners(projectCards);
  return projectCards;
  });


function assignListeners(projectCards){
  let appendedCards = document.querySelectorAll(".port-item");
  for (var i = 0; i < appendedCards.length; i++) {
    appendedCards[i].addEventListener("click", function(e){

      for (var i = 0; i < projectCards.length; i++) {

        if (e.target == projectCards[i]) {
            modalHandler(e.target);
        }
      }
    });
  }
}
function modalHandler(projCard){
  if (modal != true) {
    projCard.classList.add("modal");
    modal = true;
  }else{
    projCard.classList.remove("modal");
    modal = false;
  }
  let close = document.querySelectorAll(".close");
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function(e){
      for (var i = 0; i < close.length; i++) {
        if (e.target == close[i]) {
          projCard.classList.remove("modal");
          modal = false;
        }
      }

    });
  }
  return modal;
}
