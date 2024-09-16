// Click on the "back" button to go back to the first page
document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "Index.html";
});

//Share button, saves url to clipboard
document.querySelector('#share-button').addEventListener('click', function () {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
});