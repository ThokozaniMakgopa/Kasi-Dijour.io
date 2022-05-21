var navLinks = document.getElementById("navLinks");
function showMenu(){
      navLinks.style.right = "0";
}
function hideMenu(){
      navLinks.style.right = "-200px";
}

var layer = document.getElementsByClassName("layer")[0];

layer.addEventListener("touchstart", function(){
    layer.classList.add("layer:hover");
})

layer.addEventListener("touchend", function(){
    layer.classList.remove("layer:hover");
})