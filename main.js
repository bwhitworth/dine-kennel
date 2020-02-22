const dinos = [
  {
    id: 'dino1',
    name: 'Rex',
    type: 'T-Rex',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 100,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  },
  {
    id: 'dino2',
    name: 'Terra',
    type: 'Triceratops',
    age: 100,
    owner: 'Mary',
    adventures: [],
    health: 1,
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic8.depositphotos.com%2F1339288%2F828%2Fi%2F450%2Fdepositphotos_8285841-stock-photo-zuniceratops-dinosaur.jpg&f=1&nofb=1'
  },
  {
    id: 'dino3',
    name: 'Spike',
    type: 'Stegosaurus',
    age: 100,
    owner: 'Luke',
    adventures: [],
    health: 98,
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F24a8fcaa-f26a-400e-af1b-1f93c02ec142_1.174fe8958dd087964d8165371f8c3996.jpeg%3FodnHeight%3D450%26odnWidth%3D450%26odnBg%3Dffffff&f=1&nofb=1'
  }
]

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const singleDinoAddEvents = () => {
  let viewButtons = document.getElementsByClassName('single-dino');
  for (let i = 0; i < viewButtons.length; i++) {
    viewButtons[i].addEventListener('click', viewSingleDino);
  };
};

const petEvents = () => {
  let viewButtons = document.getElementsByClassName('dino-photo');
  for (let i = 0; i < viewButtons.length; i++) {
    viewButtons[i].addEventListener('mouseleave', dinoHealth);
  };
};

const closeSingleViewEvent = () => {
  printToDom('single-view', '');
  printDinos(dinos);
};

const viewSingleDino = (e) => {
  const dinoId = e.target.closest('.card').id;
  const selectedDino = dinos.find((currentDino)=> dinoId === currentDino.id);
  let domString = '';
  domString += ' <div class="container">',
  domString += '  <div class="row">',
  domString += '    <div class="col-6">',
  domString += `      <img class="img-fluid"src="${selectedDino.imageUrl}" alt=""/>`,
  domString += '    </div>',
  domString += '    <div class="col-6">',
  domString += `      <h2>${selectedDino.name}</h2>`,
  domString += `      <p>Type: ${selectedDino.type}</p>`,
  domString += `      <p>Age: ${selectedDino.age}</p>`,
  domString += `      <p>Owner: ${selectedDino.owner}</p>`,
  domString += `      <p>Health: ${selectedDino.health}</p>`,
  domString += '      <button type="button" class="btn btn-dark single-dino" id="close-single-view"><i class="fas fa-times-circle"></i> Close</button>',
  domString += '    </div>',
  domString += '  </div>',
  domString += '</div>',  
  
  printToDom ('kennel', '');
  printToDom ('single-view', domString);
  document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
};

const printDinos = (dinoArray) => {
  let domString = '';
  for (let i = 0; i < dinoArray.length; i++) {
    domString += '<div class="col-4">'
    domString +=  `<div class="card" id="${dinoArray[i].id}">`
    domString +=     `<img src="${dinoArray[i].imageUrl}" class="card-img-top dino-photo" alt="dino image">`
    domString +=    '<div class="card-body">'
    domString +=      `<h5 class="card-title">${dinoArray[i].name}</h5>`
    domString +=      `<p class="card-text">Health: ${dinoArray[i].health}</p>`
    domString +=      '<button type="button" class="btn btn-success single-dino"><i class="fas fa-info-circle"></i> Info</button>'
    domString +=    '</div>'
    domString +=  '</div>'
    domString += '</div>'
  }
  printToDom('kennel', domString);
  singleDinoAddEvents();
  petEvents();
};

const newDino = (e) => {
  e.preventDefault();  //prevents page refresh when Submit is clicked, this is default on Forms
  const brandNewDino = {
      id: `dino${dinos.length +1}`,
      name: document.getElementById('dino-name').value,
      type: document.getElementById('dino-type').value,
      age: document.getElementById('dino-age').value,
      owner: document.getElementById('dino-owner').value,
      adventures: [],
      health: 100,
      imageUrl: document.getElementById('dino-image').value
    }
  dinos.push(brandNewDino);
  document.getElementById('new-dino-form').reset();
  document.getElementById('collapseOne').classList.remove('show');
  printDinos(dinos);
};

const dinoHealth = (e) => {
  const dinoId = e.target.closest('.card').id;
  const dinoPosition  = dinos.findIndex((p) => p.id === dinoId);
  if (dinos[dinoPosition].health < 100){
  dinos[dinoPosition].health += 1;
  printDinos(dinos);}
};

const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', newDino);
  printDinos(dinos);
};

init();