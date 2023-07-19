// Function to update the drink count
function updateDrinkCount() {
    let drinkCount = localStorage.getItem('drinkCount');
    if (!drinkCount) {
      drinkCount = 0;
    }

    const drinkCountElement = document.getElementById('drink-count');
    drinkCountElement.textContent = `You have submitted ${drinkCount} specialty drink(s).`;
  }

  // Function to increment the drink count
  function incrementDrinkCount() {
    let drinkCount = localStorage.getItem('drinkCount');
    if (!drinkCount) {
      drinkCount = 0;
    }

    drinkCount++;
    localStorage.setItem('drinkCount', drinkCount);
    updateDrinkCount();
  }

  // Update the drink count when the page loads
  window.addEventListener('load', updateDrinkCount);

  // Add event listener to the make drink button
  const makeDrinkButton = document.getElementById('make-drink-button');
  makeDrinkButton.addEventListener('click', incrementDrinkCount);
