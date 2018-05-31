function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// nav menu open and close

// modal
let modal = document.getElementById('contact-Modal');

let modalBtn = document.getElementById('modButton');

let closeBtn= document.getElementsByClassName('closeButn')[0];

window.addEventListener('click', clickOutside)
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}


function clickOutside(e){
if(e.target==modal)
    modal.style.display = 'none';
}
// modal

//interests tabs 

function openCity(evt, interests) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(interests).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

