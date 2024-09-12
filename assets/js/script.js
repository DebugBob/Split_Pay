
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
      alert('Error! Please try again.');
    }
  });

  // Display items as item-cards
  function displayItems() {
    const itemList = document.querySelector('#item-list');
    itemList.innerHTML = '';

    // Retrieve items from localStorage
    const items = JSON.parse(localStorage.getItem('items')) || [];

    // Create item-cards for each item
    items.forEach((item, index) => {
      const itemCard = document.createElement('div');
      itemCard.className = 'item-card';
      itemCard.innerHTML = `
        <p><strong>Item:</strong> ${item.name}</p>
        <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
      `;
      itemList.appendChild(itemCard);
    });
  }

  // Display items on page load
  document.addEventListener('DOMContentLoaded', displayItems);