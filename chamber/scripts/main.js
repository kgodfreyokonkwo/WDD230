//for date and time manipulations

const year = new Date().getFullYear();
const copySymbol = document.querySelector("#footnote h5");
copySymbol.innerHTML = copySymbol.innerHTML.replace("©", `&copy; ${year}`);

// select the <h4> element in the footer where we want to display the last modified date and time
const lastUpdated = document.querySelector('footer h6');

// get the last modified date and time of the HTML file
const lastModified = new Date(document.lastModified);

// format the last modified date and time as a string in the format "DD/MM/YYYY HH:MM:SS"
const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`;

// set the innerHTML of the <h4> element to display the formatted last modified date and time
lastUpdated.innerHTML = `Last updated: ${formattedDate}`;

// select the <h1> element with class "current-date"
const currentDateElement = document.querySelector('.current-date');

// get the current date
const currentDate = new Date();

// format the date as desired (e.g., "Sunday 14th May 2023")
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const formattDate = currentDate.toLocaleDateString('en-US', options);

// update the innerHTML of the <h1> element with the formatted date
currentDateElement.innerHTML = `Today's date is ${formattDate}`;




// for banner

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const X = document.getElementById('hamburgerBtn');

X.onclick = toggleMenu;

  window.addEventListener('DOMContentLoaded', function() {
    var presentDate = new Date();
    var dayOfWeek = presentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
  
    if (dayOfWeek === 1 || dayOfWeek === 2) { // Monday (1) or Tuesday (2)
      var banner = document.getElementById('banner');
      banner.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
      banner.style.display = 'block';
    }
  });
  

//Loding Images

// Select the images I want to load by the selector querySelectorAll selecting these by the html element img and the attribute [data-src].
const imgToLoad = document.querySelectorAll("img[data-src]");

// These are the options to load the images.
const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 200px 0px",
};

// This fuction is going to remove the data-src attribute and replace for src attribute.
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// Check if the Intersection Observer is supported.
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
    // Use the image options.
  }, imageOptions);
  imgToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imgToLoad.forEach((img) => {
    loadImages(img);
  });
}

// Somewhere else in my code base set the last visit in localStorage

function displayDaysSinceLastVisit() {
    const visitsDisplay = document.querySelector('.daysSinceLastVisit');
    
    const lastVisit = Number(localStorage.getItem('lastVisit'));
    
    if (!lastVisit) {
        visitsDisplay.innerHTML = 'This is your first visit.';
        
        return;
    }
    
    const currentDate = Date.now();
    
    const difference = currentDate - lastVisit;
    const differenceInDays =difference / 84600000;
    
    visitsDisplay.innerHTML = differenceInDays.toFixed(0);
}

displayDaysSinceLastVisit();

localStorage.setItem('lastVisit', Date.now());


// for the spotlight information
fetch('members.json')
  .then(response => response.json())
  .then(data => displayChamberMembers(data.members))
  .catch(error => console.log(error));
