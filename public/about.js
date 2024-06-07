function toggleNavMenu() {
    var x = document.getElementById("mobileNav");
    var overlay = document.getElementById("overlay");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      overlay.style.display = "block"; // Show the overlay
    } else {
      x.className = x.className.replace(" w3-show", "");
      overlay.style.display = "none"; // Hide the overlay
      
      // Reset the display of IBC and Clubs links
      var ibcLink = document.querySelector(".ibc-link");
      var clubsLink = document.querySelector(".clubs-link");
      var arrowIcon = document.querySelector("#mobileEventsButton i.fa");
      ibcLink.style.display = "none";
      clubsLink.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    }
}

// Add an event listener to the mobileEventsButton
document.getElementById("mobileEventsButton").addEventListener("click", function() {
    var dropdownContent = document.getElementById("eventsDropdownContentMobile");
    var arrowIcon = document.querySelector("#mobileEventsButton i.fa");
    
    // Toggle the visibility of the dropdown content
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        arrowIcon.style.transform = "rotate(0deg)"; // Rotate the arrow to 0 degrees
    } else {
        dropdownContent.style.display = "block";
        arrowIcon.style.transform = "rotate(180deg)"; // Rotate the arrow to 180 degrees
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const mobileNav = document.getElementById("mobileNav");

    overlay.addEventListener("click", function() {
        // Toggle the visibility of the mobile navigation
        toggleNavMenu();
    });
});

// Get the Events button element
var eventsButton = document.getElementById("mobileEventsButton");

// Get the dropdown content element
var dropdownContent = document.getElementById("eventsDropdownContentMobile");

// Add click event listener to the Events button
eventsButton.addEventListener("click", function() {
  // Toggle the display of the dropdown content
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

// Get the IBC and Clubs links elements
var ibcLink = document.querySelector(".ibc-link");
var clubsLink = document.querySelector(".clubs-link");

// Get the arrow icon element
var arrowIcon = document.querySelector("#mobileEventsButton i.fa");

// Add click event listener to the Events button
eventsButton.addEventListener("click", function() {
  // Toggle the display of IBC and Club links
  if (ibcLink.style.display === "none") {
    ibcLink.style.display = "block";
    clubsLink.style.display = "block";
    // Rotate the arrow icon upwards
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    ibcLink.style.display = "none";
    clubsLink.style.display = "none";
    // Rotate the arrow icon downwards
    arrowIcon.style.transform = "rotate(0deg)";
  }
});
