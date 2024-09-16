// Render items from local storage on page 2
function renderEverything() {
  let enteredItems = JSON.parse(localStorage.getItem('items') || []);
  const firstTable = document.getElementById('first-tb');

  if (enteredItems) {
    for (let i = 0; i < enteredItems.length; i++) {
      let items = enteredItems[i];
      const renderedItem = document.createElement('tr');
      renderedItem.className = 'item-info tr-spacing';

      const itemName = document.createElement('th');
      itemName.textContent = items.name;
      itemName.className = 'th-bg';

      const itemPrice = document.createElement('th');
      itemPrice.textContent = `$${items.price.toFixed(2)}`;
      itemPrice.className = 'th-bg';

      renderedItem.appendChild(itemName);
      renderedItem.appendChild(itemPrice);
      firstTable.appendChild(renderedItem);
    }
  }

  let enteredPeople = JSON.parse(localStorage.getItem('people'));
  const secondTable = document.getElementById('second-tb');

  if (enteredPeople) {
    for (let x = 0; x < enteredPeople.length; x++) {
      const renderPeople = document.createElement('tr');
      renderPeople.className = 'item-info tr-spacing';

      const personsName = document.createElement('th');
      personsName.textContent = enteredPeople[x];
      personsName.className = 'th-bg';

      let sum = 0;
      enteredItems.forEach((item, index) => {
        sum = item.price + sum;
      });

      let pricePerPerson = sum / enteredPeople.length;
      const amountOwed = document.createElement('th');
      amountOwed.textContent = `$${Number(pricePerPerson.toFixed(2))}`;
      amountOwed.className = 'th-bg';

      renderPeople.appendChild(personsName);
      renderPeople.appendChild(amountOwed);
      secondTable.appendChild(renderPeople);
    }
  }
}

document.addEventListener('DOMContentLoaded', renderEverything);
