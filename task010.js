function commonChars(string1, string2){
    var maxString;
    var minString;
    var commonChars = [];

    if(string1.length >= string2)
    {
        maxString = string1.toLowerCase();
        minString = string2.toLowerCase();
    } 
    else 
    {
        maxString = string2.toLowerCase();
        minString = string1.toLowerCase();
    }

    for(var i = 0; i < minString.length; i++)
    {
        for(var j = 0; j < maxString.length; j++)
        {
            if(minString.charAt(i) == maxString.charAt(j))
            {
                if(commonChars.includes(minString.charAt(i)) == false)
                {
                    commonChars.push(minString.charAt(i));
                }                
            }
        }
    }

    var commonStr = commonChars.join(", ");
    return commonStr;
}

/*  Testing
    console.log(commonChars("house","computers"));
*/