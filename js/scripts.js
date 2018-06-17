function toggle_resume_text(id){
  arrow_right_style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid var(--accent-2);"
  var arrow_down_style= "width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid var(--accent-2);"
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
  }
}
