document.addEventListener("DOMContentLoaded", function () {
  
  
  const sidebar = document.getElementById("sidebar");
  console.log("siddd",sidebar)
  const toggleButton = document.getElementById("toggleButton");
  const createVideoText = document.getElementById('createVideoText');
  const projectText = document.getElementById('projectText');
  const backgoundText = document.getElementById('backgroundText');
  const musicText = document.getElementById('musicText');
  const sheduledPostText = document.getElementById('sheduledPostText');
  const homeText = document.getElementById('homeText');
  const rewardDiv = document.getElementById('rewardDiv');
  const sidebarInfoDiv = document.getElementById('sidebarInfoDiv');
  
  sidebarInfoDiv.style.display = 'none'; 
  
  sidebar.style.width = '18rem'; 

  toggleButton.addEventListener("click", function () {
    // Toggle the width of the sidebar
    console.log("dddd",22,sidebar.style.width)
    sidebar.style.width = sidebar.style.width == "6rem" ? "18rem" : "6rem";
    createVideoText.style.display = sidebar.style.width == '6rem' ? 'none' : 'block';
    
    
    sheduledPostText.style.display = sidebar.style.width == '6rem' ? 'none' : 'block';
    projectText.style.display = sidebar.style.width == '6rem' ? 'none' : 'block';
    musicText.style.display = sidebar.style.width == '6rem' ? 'none' : 'block';
    backgoundText.style.display = sidebar.style.width == '6rem' ? 'none' : 'block';
    homeText.style.display = sidebar.style.width == '6rem' ? 'none' : 'block';
    rewardDiv.style.display = sidebar.style.width == '6rem' ? 'none' : 'block';
    
    sidebarInfoDiv.style.display = sidebar.style.width == '6rem' ? 'flex' : 'none';
    
    
    
   
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const mobileSidebarIcon = document.getElementById("mobileSidebarIcon");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const mobileNavbar = document.getElementById("mobileNavbar");
  const closeSidebar = document.getElementById("closeSidebar");
  
  // Add a click event listener to the icon
  mobileSidebarIcon.addEventListener("click", function () {
  
    mobileNavbar.style.transform = "translateX(0%)";
  });
  
  closeSidebar.addEventListener("click", function () {
    // Hide the sidebar
    mobileNavbar.style.transform = "translateX(-100%)";
    mobileNavbar.style.transition = "transform 0.5s ease";
  

  });
});

