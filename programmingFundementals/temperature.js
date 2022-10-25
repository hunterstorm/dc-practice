function temperature(x) {
    if (x < 60) {
        console.log ("Chill");
    }
    else if (x >= 60 && x <= 80) {
        console.log ("Pleasant");
    } 
    else if (x > 80 && x <= 100) {
        console.log ("Hot");
    }
    else if (x > 100) {
        console.log ("Very Hot"); 
    }

 }


temperature (59);
temperature (75);
temperature (101);
temperature (85);