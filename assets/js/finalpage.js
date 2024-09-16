// Click on the "back" button to go back to the first page
document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "Index.html";
});


// Resets the application
document.querySelector('#paid-button').addEventListener('click', function () {
  localStorage.setItem('items', JSON.stringify(null));
  localStorage.setItem('people', JSON.stringify(null));
  
  //goes back to index.html
  window.location.href = "Index.html";
});