for(let i=1; i<=100; i++) {

    let ul = document.getElementById("list");
    let li = document.createElement('li');

    //controllo se il numero è multiplo di 3

    if(i % 3 == 0) {

        //controllo se il numero è ANCHE multiplo di 5

        if(i % 5 == 0) {

            console.log("FizzBuzz");

            li.innerText += "FizzBuzz";
            li.style.backgroundColor = "red"; }

            else {
                
            //se non è ANCHE multiplo di 5 allora è solo multiplo di 3

            console.log("Fizz");

            li.innerText += "Fizz";
            li.style.backgroundColor = "purple";     
        }
    }else if (i % 5 == 0) {   

        //controllo se il numero è multiplo di 5
        
        console.log("Buzz");
        
        li.innerText += "Buzz";
        li.style.backgroundColor = "green";

    }else{

        //in alternativa il numero non è divisibile per nessuno dei due numeri

        console.log(i);
        li.innerText += i;
        li.style.backgroundColor = "yellow";
    }
    
    ul.append(li);
}