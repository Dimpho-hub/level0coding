function MaximumNumber(){
    var max = 0;
    for (var i = 0; i < arguments.length; i++)
    {
        if(arguments[i] > max)
        {
            max = arguments[i];
        }
    }
    return max;
}

console.log(MaximumNumber(1,22,4,3));