function CalculateLevel(){

    var carbon = parseInt(document.getElementById('input').value);
  
    var level = document.getElementById("level");

    if(carbon>=120000){
        level.innerHTML= "Your Carbon emission is too high. Think greener next time";
   
    } else if(carbon<=100000 && carbon>80000){
        level.innerHTML= "As per your Carbon input you fall nunder Level 1 category and hence you get 10 points.";
    }
    else if(carbon<=80000 && carbon>60000){
        level.innerHTML= "As per your Carbon input you fall nunder Level 2 category and hence you get 30 points.";
    } 
    else if(carbon<=60000 && carbon>40000){
        level.innerHTML= "As per your Carbon input you fall nunder Level 3 category and hence you get 50 points.";
    } 
    else if(carbon<=40000 && carbon>20000){
        level.innerHTML= "As per your Carbon input you fall nunder Level 4 category and hence you get 70 points.";
    }
    else {
        level.innerHTML= "As per your Carbon input you fall under level 5 category and hence you get 100 ";
 
    }   

    var credits = document.getElementById("credits");

    if(carbon> 120000){
        credits.innerHTML= "0";
   
    } else if(carbon>=100000){
        credits.innerHTML= "10";
    }
    else if(carbon>=80000){
        credits.innerHTML= "30";
    } 
    else if(carbon>=60000){
        credits.innerHTML= "50";
    } 
    else if(carbon>40000){
        credits.innerHTML= "70";
    }
    else {
        credits.innerHTML= "100 ";
 
    } 

    };
