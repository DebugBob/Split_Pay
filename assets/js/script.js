// Clicking addValue creates an item card, stores it and calls disPLayItems
document.querySelector("#add-value").addEventListener("click", function () {
  const itemName = document.querySelector("#item-name").value;
  const itemPrice = document.querySelector("#item-price").value;

  if (itemName && itemPrice) {
    // Create a new item object
    const item = {
      name: itemName,
      price: parseFloat(itemPrice),
    };

    // Retrieve existing items from localStorage
    let items = JSON.parse(localStorage.getItem("items")) || [];

    // Add new item to the list
    items.push(item);

    // Save updated list to localStorage
    localStorage.setItem("items", JSON.stringify(items));

    // Clear input fields
    document.querySelector("#item-name").value = "";
    document.querySelector("#item-price").value = "";

    // Update the item list UI
    displayItems();
  } else {
    // Create <p> element to display the error message
    const error = document.createElement("p");
    error.className = "error-message";
    error.textContent = "Error! Please Try Again.";

    // Insert the error message below the button
    document
      .querySelector("#add-value")
      .insertAdjacentElement("afterend", error);
    setTimeout(function () {
      error.textContent = "";
    }, 4000);
  }
});

// Display items as item-cards
function displayItems() {
  const itemList = document.querySelector("#item-list");
  itemList.innerHTML = "";

  const items = JSON.parse(localStorage.getItem("items")) || [];

  // Create item-cards for each item
  items.forEach((item, index) => {
    const itemCard = document.createElement("div");
    itemCard.className = "button-card";

    // Create item name and price element
    const itemInfo = document.createElement('p');
    itemInfo.innerHTML = `${item.name}: ${item.price.toFixed(2)}`;


    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
      deleteItem(index); // Delete the item when the button is clicked
    });

    // Append item info and delete button to itemCard
    itemCard.appendChild(itemInfo);
    itemCard.appendChild(deleteButton);

    // Append itemCard to the itemList
    itemList.appendChild(itemCard);
  });
}

//Deletes the item: price card from localStorage
function deleteItem(index) {
  let items = JSON.parse(localStorage.getItem("items")) || [];

  //removes the item at the index and updates localStorage and updates screen
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  displayItems();
}

// Clicking addPerson creates a name card, stores it and calls displayPersons
document.querySelector("#add-person").addEventListener("click", function () {
  const personName = document.querySelector("#person-name").value;

  if (personName) {
    // Create a new item object
    const person = personName;

    // Retrieve existing items from localStorage
    let people = JSON.parse(localStorage.getItem("people")) || [];

    // Add new person to the list
    people.push(person);

    // Save updated list to localStorage
    localStorage.setItem("people", JSON.stringify(people));

    // Clear input field
    document.querySelector("#person-name").value = "";

    // Update the name list UI
    displayPersons();
  } else {
    // Create <p> element to display the error message
    const error = document.createElement("p");
    error.className = "error-message";
    error.textContent = "Error! Please Try Again.";

    // Insert the error message below the button
    document
      .querySelector("#add-person")
      .insertAdjacentElement("afterend", error);
    setTimeout(function () {
      error.textContent = "";
    }, 4000);
  }
});

// Display names as name-cards
function displayPersons() {
  const personList = document.querySelector("#person-list");
  personList.innerHTML = "";

  const people = JSON.parse(localStorage.getItem("people")) || [];

  // Create name-cards for each item
  for (let i = 0; i < people.length; i++) {
    const nameCard = document.createElement("div");
    nameCard.className = "button-card";
    let name = people[i];

    // Create person name element
    const nameP = document.createElement("p");
    nameP.innerHTML = `${name}`;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
      deletePerson(i); // Delete the name when the button is clicked
    });

    // Append name and delete button to nameCard
    nameCard.appendChild(nameP);
    nameCard.appendChild(deleteButton);

    // Append nameCard to the itemList
    personList.appendChild(nameCard);
  }
}

//Deletes the item: price card from localStorage
function deletePerson(index) {
  let people = JSON.parse(localStorage.getItem("people")) || [];

  //removes the item at the index and updates localStorage and updates screen
  people.splice(index, 1);
  localStorage.setItem("people", JSON.stringify(people));
  displayPersons();
}

function totalCalc(){
  const items = localStorage.getItem('items');
  const items_parsed = JSON.parse(items);
  let total = 0;

  items_parsed.forEach(items_parsed =>{
    total += items_parsed.price;
  })
  console.log(items_parsed);
  console.log(total);

  localStorage.setItem("total", total);
}
document.getElementById(`calculate-button`).addEventListener("click", totalCalc);


// Display items on page load
displayItems();
// DIsplay names on load
displayPersons();

