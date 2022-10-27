let n = [10, 20, 30, 40, 50];


function numArr (x, array) {
    console.log (x," " + array);

    for (i=0;i <array.length;i++){
        if (x == array[i]){
            console.log ("Number Found!");
        }else {
            console.log ("Number Not Found!");
        }


    }
    
}

numArr (20, n);