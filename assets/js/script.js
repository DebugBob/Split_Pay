
//Variable for the Modal popup
//One each for the popup itself, one for the button, one for the close button.
var modal = document.getElementById("NAME OF MODAL ID");
var accept = document.getElementById("NAME OF BUTTON ELEMENT");
var cross = document.getElementById("NAME OF CLOSE BUTTON ELEMENT");
//If it needs to be getElementsByClassName()[0] < Remember the array.


//When the confirm button is clicked display modal popup as block type.
accept.onclick = function()
{
    modal.style.display = "block";
}

//When the close button is clicked, make it empty to remove it.
cross.onclick = function()
{
    modal.style.display = "none";
}

//If you click outside of the popup, make it empty to remove it.
window.onclick = function(event)
{
    if (event.target == modal){
        modal.style.display = "none";
    }
}