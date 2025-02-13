// Function to calculate the carbon footprint and track it
function calculateCarbonFootprint() {
    
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuel-efficiency').value);
    var electricityConsumed = parseFloat(document.getElementById('electricity').value); 
    var meatConsumption = parseFloat(document.getElementById('meat-consumption').value);
    var waterUsage = parseFloat(document.getElementById('water-usage').value);
    var flightHours = parseFloat(document.getElementById('flight-hours').value);

    var transportationEmission = (distance / fuelEfficiency) * 2.3; // Assuming 2.3 kg CO2 per liter of fuel

    var electricityEmission = electricityConsumed * 0.5; // Assuming 0.5 kg CO2 per kWh

    var meatEmission = meatConsumption * 20; // Assuming 20 kg CO2 per kg of meat

    var waterEmission = waterUsage * 0.002; // Assuming 0.002 kg CO2 per liter of water

    var flightEmission = flightHours * 90; // Assuming 90 kg CO2 per passenger per hour
 
    // Total carbon footprint
    var totalCarbonFootprint = transportationEmission + electricityEmission + meatEmission + waterEmission + flightEmission;

    // Display the result on the webpage
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "<p>Total Carbon Footprint: " + totalCarbonFootprint.toFixed(2) + " kg CO2</p>";

    // Track the carbon footprint for the month
    trackMonthlyCarbonFootprint(totalCarbonFootprint);

    // Provide credit if total footprint is less than 50
    var creditsElement = document.getElementById('credits');
    if (totalCarbonFootprint < 50) {
        creditsElement.innerHTML = "<p>Congratulations! You have earned a credit of 3 points.</p>";
    } else {
        creditsElement.innerHTML = "";
    }
}

// Function to track the monthly carbon footprint in local storage
function trackMonthlyCarbonFootprint(carbonFootprint) {
    var date = new Date();
    var month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
    var year = date.getFullYear();
    var monthKey = year + '-' + month;

    // Retrieve or initialize monthly carbon footprint data
    var monthlyData = JSON.parse(localStorage.getItem('monthlyCarbonFootprints')) || {};

    // Update monthly carbon footprint data
    monthlyData[monthKey] = (monthlyData[monthKey] || 0) + carbonFootprint;

    // Store the updated data back in local storage
    localStorage.setItem('monthlyCarbonFootprints', JSON.stringify(monthlyData));

    // Display the monthly total on the webpage
    displayMonthlyTotal(monthKey);
}

// Function to display the monthly total carbon footprint on the webpage
function displayMonthlyTotal(monthKey) {
    var monthlyData = JSON.parse(localStorage.getItem('monthlyCarbonFootprints')) || {};
    var total = monthlyData[monthKey] || 0;

    var month = parseInt(monthKey.split('-')[1]);
    var year = parseInt(monthKey.split('-')[0]);
    var monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });

    var monthlyTotalElement = document.getElementById('monthly-total');
    monthlyTotalElement.innerHTML = "<p>Carbon Footprint for " + monthName + " " + year + ": " + total.toFixed(2) + " kg CO2</p>";
}

// Initial display of monthly total carbon footprint when the page loads
window.onload = function() {
    var date = new Date();
    var month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
    var year = date.getFullYear();
    var monthKey = year + '-' + month;
    displayMonthlyTotal(monthKey);
};