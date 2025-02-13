function calculateForComp(){

    var sewage = parseFloat(document.getElementById('sewage').value);
    var electricity = parseFloat(document.getElementById('electricity').value); 
    var gas = parseFloat(document.getElementById('gas-natural').value);
    var water = parseFloat(document.getElementById('water-usage').value);
    var ac = parseFloat(document.getElementById('ac').value);
    var greenery = parseFloat(document.getElementById('green-area').value);
    var trees = parseFloat(document.getElementById('trees').value);
    var lpg = parseFloat(document.getElementById('lpg').value);

    var electricityEmission = electricity * 0.5; // Assuming 20 kg CO2 per kg of meat

    var waterEmission = water * 0.002; // Assuming 0.002 kg CO2 per liter of water

    var acEmission = ac * 1; // Assuming 1kg of CO2 is absorbed per hour 

    var treeAbsorb= trees * 1; // Assuming 1 kg of CO2 is absored for every tree

    var greenAbsorb= greenery * 0.008; // Assuming 1 kg of CO2 is absored for every tree

    var gasEmission = gas * 2; // Assuming 2 kg of per MJ

    var lpgEmission = lpg * 1.5; // Assuming 1.5 kg CO2e per liter

    var sewageEmission = sewage * 0.125; // Assuming 1.5 kg CO2e per gallon

    var totalCarbon = electricityEmission + waterEmission + acEmission + gasEmission + sewageEmission + lpgEmission - (greenAbsorb + treeAbsorb);


    // Display the result on the webpage
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "<p>Total Carbon Footprint: " + totalCarbon.toFixed(2) + " kg CO2</p>";

}