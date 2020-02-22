const dinos = []

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const printDinos = (dinoArray) => {
  let domString = '';
  for (let i = 0; i < dinoArray.length; i++) {
    domString += '<div class="col-4">'
    domString +=  '<div class="card">'
    domString +=     `<img src="${dinoArray[i].imageUrl}" class="card-img-top" alt="dino image">`
    domString +=    '<div class="card-body">'
    domString +=       `<h5 class="card-title">${dinoArray[i].name}</h5>`
    domString +=      `<p class="card-text">Health: ${dinoArray[i].health}</p>`
    domString +=    '</div>'
    domString +=  '</div>'
    domString += '</div>'
  }
  printToDom('kennel', domString);
}

// https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg

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

const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', newDino);
}

init();