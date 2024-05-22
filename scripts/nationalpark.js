"use strict";

const searchType = document.getElementById("searchType");
const locationDropdown = document.getElementById("locationDropdown");
const typeDropdown = document.getElementById("typeDropdown");
const searchButton = document.getElementById("searchButton");
const viewAllButton = document.getElementById("viewAllBuuton");
const searchResults = document.getElementById("searchResults");
const onLocationBtn = document.getElementById("location");
const parkType = document.getElementById("parkType");

window.onload = () => {
  onLocationBtn.addEventListener("change", populateOption);
  parkType.addEventListener("change", populateOption);
  //   loadParkType();
  //   searchType.onchange = onTypeDropdownChanged;
};

// function loadParkType() {
//   for (let i = 0; i < parkTypesArray.length; i++) {
//     let theOption = new Option(parkTypesArray[i], parkTypesArray[i]);
//     typeDropdown.appendChild(theOption);
//   }
// }

// function loadLocationType() {}
// for (let i = 0; i < locationsArray.length; i++) {
//   let theOption2 = new Option(locationsArray[i], locationsArray[i]);
//   locationDropdown.appendChild(theOption2);
// }

// function onTypeDropdownChanged() {
//   if (searchType.value === "type") {
//     loadParkType();
//     console.log("park");
//   } else {
//     loadLocationType();
//     console.log("location");
//   }
// }

function populateOption() {
  //clear previous results
  searchResults.innerHTML = "";
  if (onLocationBtn.checked) {
    populateState();
  } else {
    `nothing is selected`;
  }
}

function populateState() {
  const stateSelect = document.createElement("select");
  // state.className = "form-control";

  locationsArray.forEach((state) => {
    const stateOptions = document.createElement("option");
    stateOptions.textContent = state;
    console.log(state);

    stateSelect.appendChild(stateOptions);
  });
  searchResults.appendChild(stateSelect);
}

function populateParkType() {
    const parkTypeSelect = document.createElement("select");
    locationsArray.forEach((state))
    parkTypeSelect.textContent = 
    console.log(state);
    
}

/*TODO:

 1.Compare the locationDropdown.Value to the state name from the
 nationalParkData.js then print the result
 2. Check if the nationalParkData.js LocationName property contains the
 typeDropdown.value

*/
