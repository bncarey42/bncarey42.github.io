function toggle_resume_text(id){
  if(document.getElementById(id).style.display == "none"){
     document.getElementById(id).style.display = "block"
     document.getElementById("arrow-" + id).innerHTML = "▼";
  } else {
    document.getElementById(id).style.display = "none";
     document.getElementById("arrow-" + id).innerHtml = "▶";
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
