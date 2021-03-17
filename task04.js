function evenOrOdd(num){
    var evenOrOdd;
    if (num % 2 == 0)
    {
        evenOrOdd = "Even";
    } 
    else 
    {
        evenOrOdd = "Odd";
    }
    return evenOrOdd;
}

console.log(evenOrOdd(3));