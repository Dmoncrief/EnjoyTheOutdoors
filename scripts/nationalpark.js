"use strict";

const searchType = document.getElementById("searchType");
const locationDropdown = document.getElementById("locationDropdown");
const typeDropdown = document.getElementById("typeDropdown");
const searchButton = document.getElementById("searchButton");
const viewAllButton = document.getElementById("viewAllBuuton");
const searchResults = document.getElementById("searchResults");
const onLocationBtn = document.getElementById("location");
const onParkTypeBtn = document.getElementById("parkType");
const displayResults = document.getElementById("displayResults");

window.onload = () => {
  onLocationBtn.addEventListener("change", populateOption);
  onParkTypeBtn.addEventListener("change", populateOption);
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
  } else if (onParkTypeBtn.checked) {
    populateParkType();
  }
}

function populateState() {
  const stateSelect = document.createElement("select");
  // state.className = "form-control";
  stateSelect.addEventListener("change", () =>
    populateByParkLocation(stateSelect.value)
  );

  locationsArray.forEach((state) => {
    const stateOptions = document.createElement("option");
    stateOptions.textContent = state;
    // console.log(state);

    stateSelect.appendChild(stateOptions);
  });
  searchResults.appendChild(stateSelect);
}

function populateParkType() {
  const parkTypeSelect = document.createElement("select");
  parkTypeSelect.addEventListener("change", () =>
    populateByParkType(parkTypeSelect.value)
  );
  parkTypesArray.forEach((parkType) => {
    const parkTypeOptions = document.createElement("option");
    parkTypeOptions.textContent = parkType;

    parkTypeSelect.appendChild(parkTypeOptions);
  });
  searchResults.appendChild(parkTypeSelect);
}

// //Catch the results
// function populateByParkLocation(selectedState) {
//   // This function will filter the selected state and loop through the array and display
//   const filteredParks = nationalParksArray.filter(
//     (park) => park.State === selectedState
//   );
//   if (filteredParks.length > 0) {
//     // console.log(filteredParks);
//     // displayResults.innerHTML = filteredParks[0].LocationName;
//     //Replace the above code to a code that displays as a card
//   } else {
//     ("no location is selected");
//   }
// }

// function populateAllParks(){

//   // Let's create a table to display the result
//   const parkTable = document.createElement("table");
//   parkTable.className = "table table-striped table-hover border mt-5";
//   displayResults.appendChild(parkTable);

//   const parkTableHead = document.createElement("thead");
//   parkTableHead.className = "table-dark";

//   const parkTableBody = document.createElement("tbody");
//   parkTableBody.className = "table-group-divider";

//   // Let's create the header row
//   const parkTableHeaderRow = document.createElement("tr");
//   const headers = ["Location Name", "Location Address"];
//   headers.forEach(text => {
//       const header = document.createElement("th");
//       header.textContent = text;
//       parkTableHeaderRow.appendChild(header);
//   });
//   parkTableHead.appendChild(parkTableHeaderRow);
//   parkTable.appendChild(parkTableHead);

//   //Let's now fill in the data into the table
//   nationalParksArray.forEach(park => {
//       const parkTableRow = document.createElement("tr");

//   //Creating the table data by using a function called createCell

//       parkTableRow.appendChild(createCell(park.LocationName));
//       parkTableRow.appendChild(createCell(park.Address));
//       parkTableBody.appendChild(parkTableRow);
//   });

//   parkTable.appendChild(parkTableBody);
//   displayResults.appendChild(parkTable);
// }

function populateByParkLocation(selectedState) {
  // Let's clear previous park listings
  const parkListings = document.getElementById("parkListings");
  if (parkListings) {
    parkListings.remove();
  }

  //Let's first filter selected parks
  const filteredParks = nationalParksArray.filter(
    (park) => park.State === selectedState
  );
  if (filteredParks.length > 0) {
    displayResults.innerHTML = "";
    const table = document.createElement("table");
    table.id = "parkListings";
    table.className = "table mt-5";
    const thead = document.createElement("thead");
    thead.className = "table-dark";
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
    displayResults.innerHTML = `<p class = "mt-5">No parks found in ${selectedState}.</p>`;
  }
}

function populateByParkType(selectedParkType) {
  // Let's clear previous park listings
  const parkListings = document.getElementById("parkListings");
  if (parkListings) {
    parkListings.remove();
  }

  //Let's first filter selected parks
  const filteredParkType = nationalParksArray.filter((park) =>
    park.LocationName.includes(selectedParkType)
  );
  console.log(filteredParkType);
  if (filteredParkType.length > 0) {
    displayResults.innerHTML = "";
    const table = document.createElement("table");
    table.id = "parkListings";
    table.className = "table mt-5";
    const thead = document.createElement("thead");
    thead.className = "table-dark";
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
    displayResults.innerHTML = `<p class = "mt-5">No parks found in ${selectedParkType}.</p>`;
  }
}

function createCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  cell.className = "w-25";
  return cell;
}
