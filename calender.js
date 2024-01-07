$(document).ready(function () {
  // Initialize FullCalendar
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay",
    },
    events: [
      {
        title: "Mehndi",
        start: "2023-02-01T09:00",
        end: "2023-02-01T13:00",
        color: "yellow",
        textColor: "black",
      },
      {
        title: "Haldi",
        start: "2023-02-02T15:00",
        end: "2023-02-02T16:00",
        color: "yellow",
        textColor: "black",
      },
      {
        title: "Marriage",
        start: "2023-02-03T18:00",
        end: "2023-02-03T24:00",
        color: "yellow",
        textColor: "black",
      },
    ],
  });

  // Initialize jQuery UI Datepicker
  $("#datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    onClose: function (dateText, inst) {
      var selectedDate = new Date(inst.selectedYear, inst.selectedMonth, 1);
      $("#calendar").fullCalendar("gotoDate", selectedDate);

      // Update the displayed current month
      $("#currentMonth").text(moment(selectedDate).format("MMMM YYYY"));
    },
  });

  // Initial display of current month
  var currentDate = $("#datepicker").datepicker("getDate");
  $("#currentMonth").text(moment(currentDate).format("MMMM YYYY"));
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const label = item.querySelector(".accordion-label");
    const input = item.querySelector(".hidden");
    const content = item.querySelector(".accordion-content");
    const arrow = label.querySelector(".accordion-icon img");

    // Set the initial height for closed items
    content.style.height = "0";

    label.addEventListener("click", () => {
      const contentHeight = content.scrollHeight;

      // Toggle the 'open' class to manage the state
      content.classList.toggle("open");

      // Update the checkbox state based on the 'open' class
      input.checked = content.classList.contains("open");

      // Set the content height explicitly for smooth transitions
      content.style.height = input.checked ? contentHeight + "px" : "0";

      // Rotate the arrow
      arrow.style.transform = input.checked ? "rotate(180deg)" : "rotate(0deg)";
    });

    // Set the initial rotation for closed items
    arrow.style.transform = "rotate(0deg)";
  });

  const mobileSidebarIcon = document.getElementById("mobileSidebarIcon");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const mobileNavbar = document.getElementById("mobileNavbar");

  console.log("mobileSidebarIcon", mobileSidebarIcon);
  // Corrected typo here

  // Add a click event listener to the icon
  mobileSidebarIcon.addEventListener("click", function () {
    // Toggle the 'hidden' class on the sidebar
    mobileSidebar.classList.toggle("hidden");
    mobileNavbar.style.transform = "translateX(0%)";
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const mobileSidebarIcon = document.getElementById("mobileSidebarIcon");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const mobileNavbar = document.getElementById("mobileNavbar");
  const closeSidebar = document.getElementById("closeSidebar");
  
  console.log("mobileSidebarIcon", mobileSidebarIcon);
  
  // Add a click event listener to the icon
  mobileSidebarIcon.addEventListener("click", function () {
     
    mobileSidebar.classList.toggle("hidden");
    mobileNavbar.style.transform = "translateX(0%)";
  });
  
  closeSidebar.addEventListener("click", function () {
    // Hide the sidebar
    mobileNavbar.style.transform = "translateX(-100%)";
    mobileNavbar.style.transition = "transform 0.5s ease";
  

  });
});