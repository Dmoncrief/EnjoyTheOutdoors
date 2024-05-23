"use strict";

// get elements
const searchType = document.getElementById("searchType");
const locationDropdown = document.getElementById("locationDropdown");
const typeDropdown = document.getElementById("typeDropdown");
const searchButton = document.getElementById("searchButton");
const viewAllButton = document.getElementById("viewAllBuuton");
const searchResults = document.getElementById("searchResults");
const onLocationBtn = document.getElementById("location");
const onParkTypeBtn = document.getElementById("parkType");
const displayResults = document.getElementById("displayResults");

// Event listner for when the window loads
window.onload = () => {
  onLocationBtn.addEventListener("change", populateOption);
  onParkTypeBtn.addEventListener("change", populateOption);
  //   loadParkType();
  //   searchType.onchange = onTypeDropdownChanged;
};

// create function to populate based on selected radio buttons
function populateOption() {
  //clear previous results
  searchResults.innerHTML = "";
  displayResults.innerHTML="";
  if (onLocationBtn.checked) {
    populateState();
  } else if (onParkTypeBtn.checked) {
    populateParkType();
  }
}

// create function to poulate states in dropdown
function populateState() {
  const stateSelect = document.createElement("select");
  
  stateSelect.addEventListener("change", () =>
    populateByParkLocation(stateSelect.value)
  );


  // loop locationsArray to create options?
  locationsArray.forEach((state) => {
    const stateOptions = document.createElement("option");
    stateOptions.textContent = state;
    

    stateSelect.appendChild(stateOptions);
  });
  searchResults.appendChild(stateSelect);
}

// create function to populate park type 

function populateParkType() {
  const parkTypeSelect = document.createElement("select");
  parkTypeSelect.addEventListener("change", () =>
    populateByParkType(parkTypeSelect.value)
  );
  // loop through
  parkTypesArray.forEach((parkType) => {
    const parkTypeOptions = document.createElement("option");
    parkTypeOptions.textContent = parkType;

    parkTypeSelect.appendChild(parkTypeOptions);
  });
  searchResults.appendChild(parkTypeSelect);
}


// populate location
function populateByParkLocation(selectedState) {
  // Let's clear previous park listings
  const parkListings = document.getElementById("parkListings");
  if (parkListings) {
    parkListings.remove();
  }

// filter parks for selected state
  const filteredParks = nationalParksArray.filter(
    (park) => park.State === selectedState
  );
  if (filteredParks.length > 0) {
    displayResults.innerHTML = "";
    const table = document.createElement("table");
    table.id = "parkListings";
    table.className = "table mt-4";
    const thead = document.createElement("thead");
    thead.className = "table-secondary";
    const tbody = document.createElement("tbody");
    tbody.className = "table-group-divider";

    const headerRow = document.createElement("tr");
    ["Location Name", "Address"].forEach((text) => {
      const header = document.createElement("th");
      header.textContent = text;
      headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    filteredParks.forEach((park) => {
      const row = document.createElement("tr");
      row.appendChild(createCell(park.LocationName));
      row.appendChild(createCell(park.Address));
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    displayResults.appendChild(table);
  } else {
    displayResults.innerHTML = `<p class = "mt-4">No parks found in ${selectedState}.</p>`;
  }
}

function populateByParkType(selectedParkType) {
  
  const parkListings = document.getElementById("parkListings");
  if (parkListings) {
    parkListings.remove();
  }

  //create filter for selected parks
  const filteredParkType = nationalParksArray.filter((park) =>
    park.LocationName.includes(selectedParkType)
  );
  console.log(filteredParkType);
  if (filteredParkType.length > 0) {
    displayResults.innerHTML = "";
    const table = document.createElement("table");
    table.id = "parkListings";
    table.className = "table mt-4";
    const thead = document.createElement("thead");
    thead.className = "table-secondary";
    const tbody = document.createElement("tbody");
    tbody.className = "table-group-divider";

    const headerRow = document.createElement("tr");
    ["Location Name", "Address"].forEach((text) => {
      const header = document.createElement("th");
      header.textContent = text;
      headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    filteredParkType.forEach((park) => {
      const row = document.createElement("tr");
      row.appendChild(createCell(park.LocationName));
      row.appendChild(createCell(park.Address));
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    displayResults.appendChild(table);
  } else {
    displayResults.innerHTML = `<p class = "mt-4">No parks found in ${selectedParkType}.</p>`;
  }
}

function createCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  cell.className = "w-25";
  return cell;
}
