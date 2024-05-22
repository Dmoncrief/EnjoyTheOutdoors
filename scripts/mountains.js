// "use strict";

// window.onload = () => {
//     const mountainListRow = document.getElementById("mountainListRow");
//     console.log("onload");

//     for(let mountain of mountainsArray){
//         let mountainColumnElement = createMountainColumnElement(mountain);
//         mountainListRow.appendChild(mountainColumnElement);
//     }
// };

// function createMountainColumnElement(mountain){
//     let mountainColumnDiv = document.createElement("div");
//     // mountainColumnDiv.className = "col";
//     mountainColumnDiv.classList.add("col-3" , "mt-2");

//     let mountainCardDiv = document.createElement("div");
//     mountainCardDiv.className = "card mountaincard";
//     mountainColumnDiv.appendChild(mountainCardDiv);

//     let mountainImage = document.createElement("img");
//     mountainImage.src ="images/capstone2/images/" + mountain.img; 
//     mountainImage.className = "card-img-top";
//     mountainImage.alt = mountain.name;
//     mountainCardDiv.appendChild(mountainImage);

//     let cardBodyDiv = document.createElement("div");
//     cardBodyDiv.className = "card-body";
//     mountainCardDiv.appendChild(cardBodyDiv);

//     let mountainHeadedTag = document.createElement("h5");
//     mountainHeadedTag.innerHTML = mountain.name;
//     cardBodyDiv.appendChild(mountainHeadedTag);

//     let paraDesc = document.createElement("p");
//     paraDesc.className = "card-text";
//     paraDesc.innerHTML = mountain.desc;
//     cardBodyDiv.appendChild(paraDesc);

//     let aButton = document.createElement("a");
//     aButton.className = "btn btn-secondary";
//     aButton.innerHTML = "Learn more about " + mountain.name;
//     aButton.href = "#";
//     cardBodyDiv.appendChild(aButton);

//     return mountainColumnDiv;
// }


const mountainDropdown = document.getElementById("mountainDropdown");
mountainsArray.forEach((mountain,index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = mountain.name;
    mountainDropdown.appendChild(option);
});

