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


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const X = document.getElementById('hamburgerBtn');

X.onclick = toggleMenu;

