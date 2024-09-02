function hide(){

var hidecheck = document.querySelector(".hide-box")
var box = document.querySelector(".hidden")

if (hidecheck.checked == true){
    box.style.display = "block";
}else{
    box.style.display = "none";
};
}