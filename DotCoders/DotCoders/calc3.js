// Function to calculate the carbon footprint of a individual or household

function calculateForIndustry(){

    var coal = parseFloat(document.getElementById('coal').value);
    var electricity = parseFloat(document.getElementById('electricity').value); 
    var gas = parseFloat(document.getElementById('gas-natural').value);
    var water = parseFloat(document.getElementById('water-usage').value);
    var petrol = parseFloat(document.getElementById('petrol').value);
    var oil = parseFloat(document.getElementById('oil').value);
    var diesel = parseFloat(document.getElementById('diesel').value);
    var waste = parseFloat(document.getElementById('waste').value);

    var electricityEmission = electricity * 0.5; // Assuming 20 kg CO2 per kg of meat

    var waterEmission = water * 0.002; // Assuming 0.002 kg CO2 per liter of water

    var coalEmission = coal * 2.5; // Assuming 2.5 kg of CO2 is absorbe per MJ

    var petrolEmission= petrol * 2.5; // Assuming 1 kg of CO2 is absored for every tree

    var oilEmission= oil * 3; // Assuming 3 kg of CO2 per liter

    var dieselEmission = diesel * 2.9; // Assuming 2.9 kg of per liter

    var wasteEmission = waste * 1.8; // Assuming 1.8 kg CO2e per kg

    var gasEmission = gas * 2; // Assuming 2 kg CO2e per MJ

    var totalCO2 = electricityEmission + waterEmission + coalEmission + gasEmission + petrolEmission + oilEmission + dieselEmission + wasteEmission;

    var totalFootprint = totalCO2/1000000000

    // Display the result on the webpage
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "<p>Total Carbon Footprint: " + totalFootprint.toFixed(2) + " Mt CO2</p>";

}