document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("drinkForm");
    const output = document.getElementById("output");
  
    // Fetch fruit data from the JSON source
    fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
      .then(response => response.json())
      .then(data => {
        // Populate select elements with available fruits
        const selectElements = document.querySelectorAll("select");
        data.forEach(fruit => {
          selectElements.forEach(select => {
            const option = document.createElement("option");
            option.text = fruit.name;
            option.value = JSON.stringify(fruit);
            select.appendChild(option);
          });
        });
      });
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const firstName = document.getElementById("firstName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const fruit1 = JSON.parse(document.getElementById("fruit1").value);
      const fruit2 = JSON.parse(document.getElementById("fruit2").value);
      const fruit3 = JSON.parse(document.getElementById("fruit3").value);
      const specialInstructions = document.getElementById("specialInstructions").value;
  
      const currentDate = new Date().toLocaleDateString();
  
      // Calculate total nutritional values
      const totalCarbs = fruit1.carbs + fruit2.carbs + fruit3.carbs;
      const totalProtein = fruit1.protein + fruit2.protein + fruit3.protein;
      const totalFat = fruit1.fat + fruit2.fat + fruit3.fat;
      const totalSugar = fruit1.sugar + fruit2.sugar + fruit3.sugar;
      const totalCalories = fruit1.calories + fruit2.calories + fruit3.calories;
  
      // Build the output HTML
      const outputHTML = `
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Fruit 1:</strong> ${fruit1.name}</p>
        <p><strong>Fruit 2:</strong> ${fruit2.name}</p>
        <p><strong>Fruit 3:</strong> ${fruit3.name}</p>
        <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
        <p><strong>Order Date:</strong> ${currentDate}</p>
        <h3>Nutritional Information</h3>
        <p><strong>Total Carbohydrates:</strong> ${totalCarbs}g</p>
        <p><strong>Total Protein:</strong> ${totalProtein}g</p>
        <p><strong>Total Fat:</strong> ${totalFat}g</p>
        <p><strong>Total Sugar:</strong> ${totalSugar}g</p>
        <p><strong>Total Calories:</strong> ${totalCalories}kcal</p>
      `;
  
      // Display the output on the page
      output.innerHTML = outputHTML;
    });
  });
  