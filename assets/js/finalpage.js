// Click on the "back" button to go back to the first page
document.getElementById('back-button').addEventListener('click', function () {
  window.location.href = 'Index.html';
});

//Share button, saves url to clipboard
document.querySelector('#share-button').addEventListener('click', function () {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
});

// Resets the application
document.querySelector('#paid-button').addEventListener('click', function () {
  localStorage.setItem('items', JSON.stringify(null));
  localStorage.setItem('people', JSON.stringify(null));

  //goes back to index.html
  window.location.href = 'Index.html';
});

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
      if (Array.isArray(enteredItems)) {
        enteredItems.forEach((item, index) => {
          sum = item.price + sum;
        });
      }

      let pricePerPerson = sum / enteredPeople.length;
      const amountOwed = document.createElement('th');
      amountOwed.textContent = `$${Number(pricePerPerson.toFixed(2))}`;
      amountOwed.className = 'th-bg';

      renderPeople.appendChild(personsName);
      renderPeople.appendChild(amountOwed);
      secondTable.appendChild(renderPeople);
    }
  }
  //Changes Total label to value stored in localStorage `total`
  document.getElementById(`total-sum`).textContent = `$` + localStorage.getItem(`total`);
}
document.getElementById('recalculate-button').addEventListener('click', function (){
  total_float = parseFloat(document.getElementById(`total-sum`).textContent.replace(`$`, ``));
  total_float *= 1.10;
  document.getElementById(`total-sum`).textContent = total_float;
});

document.addEventListener('DOMContentLoaded', renderEverything);

