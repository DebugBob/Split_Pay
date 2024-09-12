
document.querySelector('#add-value').addEventListener('click', function() {
    const itemName = document.querySelector('#item-name').value;
    const itemPrice = document.querySelector('#item-price').value;

    if (itemName && itemPrice) {
      // Create a new item object
      const item = {
        name: itemName,
        price: parseFloat(itemPrice)
      };

      // Retrieve existing items from localStorage
      let items = JSON.parse(localStorage.getItem('items')) || [];

      // Add new item to the list
      items.push(item);
      console.log(items);

      // Save updated list to localStorage
      localStorage.setItem('items', JSON.stringify(items));

      // Clear input fields
      document.querySelector('#item-name').value = '';
      document.querySelector('#item-price').value = '';

      // Update the item list UI
      displayItems();
    } else {
      // Create <p> element to display the error message
      const error = document.createElement('p');
      error.id = 'error-message';
      error.textContent = 'Error! Please Try Again.';

      // Insert the error message below the button
      document.querySelector('#add-value').insertAdjacentElement('afterend', error);
      setTimeout(function () {
        error.textContent = '';
      }, 4000);
    }
});

// Display items as item-cards
function displayItems() {
  const itemList = document.querySelector('#item-list');
  itemList.innerHTML = '';

  const items = JSON.parse(localStorage.getItem('items')) || [];

  // Create item-cards for each item
  items.forEach((item, index) => {
      const itemCard = document.createElement('div');
      itemCard.className = 'item-card';
      
      // Create item name and price element
      const itemInfo = document.createElement('p');
      itemInfo.innerHTML = `${item.name}: $${item.price.toFixed(2)}`;
      
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', function() {
          deleteItem(index); // Delete the item when the button is clicked
      });
      
      // Append item info and delete button to itemCard
      itemCard.appendChild(itemInfo);
      itemCard.appendChild(deleteButton);
      
      // Append itemCard to the itemList
      itemList.appendChild(itemCard);
  });
}

function deleteItem(index) {
  let items = JSON.parse(localStorage.getItem('items')) || [];

  //removes the item at the index and updates localStorage and updates screen
  items.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items));
  displayItems();
}

  // Display items on page load
  displayItems();