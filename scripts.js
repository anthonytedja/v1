function hide(){
    document.getElementById("main").style.display = "none";
    document.getElementById("about").style.display = "none";
  }
  
  function openSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("main").classList.toggle('active');
    document.getElementById("about").classList.toggle('active');
  }
  
  function showHome(){
    hide();
    document.getElementById("main").style.display = "block";
  }
  
  function showAbout(){
    hide();
    document.getElementById("about").style.display = "block";
  }