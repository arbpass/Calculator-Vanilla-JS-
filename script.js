let btn= document.getElementsByClassName("btn"); 
let scr= document.getElementsByClassName("screen");

Array.from(btn).forEach((ele)=> {
    ele.addEventListener("click", (e)=> {
        let tap= ele.id;

        //SHOWING NUMBERS TO THE SCREEN
        if(tap != "C" && tap != "CE" && tap != "=") //if id of element is C,CE,= then dont run this func
        {
            if(scr[0].innerText=="") //if nothing is on screen simply add elements in it
                scr[0].innerText= scr[0].innerText + tap;  
            else{                   //now when something is already on screen, check the last digit whether its a no. or operator
                let len= scr[0].innerText.length;
                let lastDigit= scr[0].innerText[len-1]; //lastDigit of string on screen
                if(lastDigit != "%" && lastDigit != "/" && lastDigit != "*" && lastDigit != "+" && lastDigit != "-")
                    scr[0].innerText= scr[0].innerText + tap; //if lastDigit isn't operator then simply add elements
                else{               //now if lastDigit is operator then add only no.
                    if(tap != "%" && tap != "/" && tap != "*" && tap != "+" && tap != "-") //add only numbers to the screen
                        scr[0].innerText= scr[0].innerText + tap; //if you press numbers then only it will add, eg: tap= "7" 
                }                    
            } 
        }

        //WHEN = GET PRESSED
        if(tap== "=")
        {
            let solution= eval(scr[0].innerText); //eval() solves the problem in text
            scr[0].innerText= solution;
        }

        //WHEN C GET PRESSED
        if(tap== "C")
        {
            scr[0].innerText= "";
        }

        //WHEN CE GET PRESSED
        if(tap== "CE")
        {
            let digit= Array.from(scr[0].innerText); //innerText mai jo bhi hai, convert it to array
            digit.length= digit.length-1; //array ka length ek chota krdo
            let newNumWithComma= digit.toString(); //and then convert it to string again
            let newNum= newNumWithComma.replace(/,/g, ''); //but array->string contains commas, remove commas
            scr[0].innerText= newNum;             
        }
    });
});

