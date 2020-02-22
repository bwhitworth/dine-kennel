const dinos = []

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

  console.log(dinos);
};

const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', newDino);
}

init();