// Get the elements
const mountainDropdown = document.getElementById("mountainDropdown");
const mountainInfo = document.getElementById("mountainInfo");
const mountainDesc = document.getElementById("mountainDesc");
const mountainElevation = document.getElementById("mountainElevation");

// Populate the dropdown with mountain options
mountainsArray.forEach((mountain, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = mountain.name;
    mountainDropdown.appendChild(option);
});

// Function to display mountain information when a mountain is selected
function showMountainInfo() {
    // Get the index of the selected mountain
    const selectedIndex = mountainDropdown.value;

    // If no mountain is selected, hide the mountain information
    if (selectedIndex === "") {
        document.getElementById("mountainInfo").style.display = "none";
        return;
    }

    // Get the mountain object from the array based on the selected index
    const mountain = mountainsArray[selectedIndex];

    // Display the mountain name, description, and elevation
    document.getElementById("mountainName").textContent = mountain.name;
    document.getElementById("mountainDesc").textContent = mountain.description;
    document.getElementById("mountainElevation").textContent = `Elevation: ${mountain.elevation} feet`;

    // Display the mountain image
    document.getElementById("mountainImg").src = "images/capstone2/images/" + mountain.img;
    document.getElementById("mountainImg").alt = mountain.name;

    // Show the mountain information
    document.getElementById("mountainInfo").style.display = "block";
}

// Add event listener to the dropdown to trigger showMountainInfo function
mountainDropdown.addEventListener("change", showMountainInfo);