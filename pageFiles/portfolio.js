//nav function 
function openNav() {
    document.getElementById("menuIcon").style.width = "100%";
}

function closeNav() {
    document.getElementById("menuIcon").style.width = "0%";
}
//modal contact form
var modal = document.getElementById('mod_Content');
var btn = document.getElementById('modButton');
var span =document.getElementsByClassName('close')[0]
btn.onclick=function(){
    modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}