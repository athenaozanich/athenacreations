//Wait for document to be ready
let projectCards = [];
let vertPortWrapper = document.querySelector(".vert-wrapper");
let projectCard;
let parsedProjectCard;
//get data from db
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "js/portData.json", true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            //store data array
            let projects = json.portItems;
            //console.log(projects);
            //loop through data
            for (var i = 0; i < projects.length; i++) {
              //create variable for project card
             projectCard =
              `<section class="port-item card__${i}">
                  <a href="${projects[i].url}">
                    <h6>${projects[i].name}</h6>
                    <img src="imgs/${projects[i].img}" alt="${projects[i].name}"/>
                  </a>
                  <aside>
                    <p>
                      ${projects[i].desc}
                    </p>
                  </aside>
               </section>`;
            //append card to DOM

            parsedProjectCard = $.parseHTML(projectCard);
            //console.log(parsedProjectCard);

            projectCards.push(parsedProjectCard[0]);


            vertPortWrapper.appendChild(projectCards[i]);
            }



         }
    }
return projectCards;
};
xmlhttp.send(null);

function openModal(modalName){

}
let appendedCards = document.querySelectorAll(".port-item");
console.log(projectCards);
