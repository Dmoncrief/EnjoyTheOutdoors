// Get the elements
const mountainDropdown = document.getElementById("mountainDropdown");
const mountainInfo = document.getElementById("mountainInfo");
const mountainDesc = document.getElementById("mountainDesc");
const mountainElevation = document.getElementById("mountainElevation");
const mountainName = document.getElementById("mountainName");
const imageHolder = document.getElementById("imageHolder");

window.onload = () => {
  mountainSelect.addEventListener("change", populateMountains);
};

// Populate the dropdown with mountain options

const mountainSelect = document.createElement("select");
mountainDropdown.appendChild(mountainSelect);
mountainsArray.forEach((mountain, index) => {
  const option = document.createElement("option");
  option.value = index;
  //   console.log(index);
  option.textContent = mountain.name;
  mountainSelect.appendChild(option);
});

function populateMountains() {
  imageHolder.innerHTML = "";
  const selectedIndex = mountainSelect.value;
  console.log(selectedIndex);

  let mountain = mountainsArray[selectedIndex];

  console.log(mountain.desc);
  mountainName.textContent = mountain.name;
  mountainDesc.textContent = mountain.desc;
  mountainElevation.textContent = mountain.elevation;

  const image = document.createElement("img");
  image.src = "images/capstone2/images/" + mountain.img;
  image.alt = mountain.name;
  imageHolder.appendChild(image);
}
