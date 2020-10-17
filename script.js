//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  let dropdown=document.querySelector("#inputGroupSelect04");
  console.log(dropdown);

  for(let i=0; i<allEpisodes.length; i++){
    let option=document.createElement("option");
    option.innerHTML=allEpisodes[i].name;
    dropdown.appendChild(option);
  }
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");

  for(const episode of episodeList) {
    let episodeCard = document.createElement("div");
    // let innercontent = `
    //   <div class="card" style="width: 18rem;">
    //     <img src="${episode.image.medium}" class="card-img-top">
    //     <div class="card-body">
    //       <h5 class="card-title">${episode.name}</h5>
    //       <p class="card-text">${episode.summary}</p>
    //       <a href="${episode._links.self.href}" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
    // `;
    let innercontent = `
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="${episode.image.medium}">
            <div class="caption">
              <h3>${episode.name}</h3>
              <p>${episode.summary}</p>
              <p><a href="${episode._links.self.href}" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
      </div>
    `;
    episodeCard.innerHTML = innercontent;

    rootElem.appendChild(episodeCard);
  }
}

window.onload = setup;
