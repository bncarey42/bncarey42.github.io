function toggle_resume_text(id){
  var elm = document.getElementById(id);
  var arrow_right = document.getElementById('arrow-' + id).querySelectorAll(".right_arrow")[0];
  var arrow_down = document.getElementById('arrow-' + id).querySelectorAll(".down_arrow")[0];

  if(elm.style.display == "none"){
    elm.style.display = "block";
    arrow_right.style.display = "none";
    arrow_down.style.display = "block";
  } else {
    elm.style.display = "none"
    arrow_right.style.display = "block";
    arrow_down.style.display = "none";
  }
}

function toggle_splash_text(){
  if(document.getElementById("splash_msg").style.display == "block"){
     document.getElementById("splash_msg").style.display = "none";
     document.getElementById("splash_about").style.display = "block";
  } else {
    document.getElementById("splash_about").style.display = "none";
    document.getElementById("splash_msg").style.display = "block";
  }
}

function coming_soon(){
  document.getElementById('emailForm').style.display = "none";
  document.getElementById('coming_soon').style.display = "block";
}
