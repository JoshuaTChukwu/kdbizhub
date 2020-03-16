
function nav(){
  var x = document.getElementById("mob_nav");
  var a = document.getElementById("div_one");
  var b = document.getElementById("div_two");
  var c = document.getElementById("div_three");
  if(x.style.display == "flex"){
    x.style.display = "none";
    a.style="transform:none;";
    c.style="transform:none;";
    b.style="opacity:1";
  }else{
    x.style.display = "flex";
    b.style="opacity:0";
    a.style="transform: rotate(-45deg) translate(-9px,0px);";
    c.style="transform: rotate(45deg) translate(-8px,-4px);";
  }
}





