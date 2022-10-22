function simpleCalculator(a,b,o){
    if(o == '+'){
        let c = a + b;
        console.log (c);
    }else if(o == '-') {
        let c = a-b;
        console.log(c);
    }else if(o == '*') {
        let c = a*b;
        console.log(c);
    }else if(o == '/') {
        let c = a/b;
        console.log(c);
    }else{
        console.log("not sure what's going on here bud");
    }
}

simpleCalculator (4, 5, "+");
simpleCalculator (10,200, "*");
simpleCalculator (5635, 252, "-");
simpleCalculator (33, 555, "hello");
simpleCalculator (5432, 2, "/");