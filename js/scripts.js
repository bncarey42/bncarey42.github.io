function toggle_resume_text(id){
  arrow_right_style="width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 5px solid var(--accent-2);"
  var arrow_down_style= "width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid var(--accent-2);"
  if(document.getElementById(id).style.display == "none"){
     document.getElementById(id).style.display = "block"
     document.getElementById("arrow-" + id).style = arrow_down_style;
  } else {
    document.getElementById(id).style.display = "none";
     document.getElementById("arrow-" + id).style = arrow_right_style;
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
