function vowels(string)
{
    string = string.toLowerCase();
    var vowels = "aeiou";
    var vowlesInString = [];

    for(var i = 0; i < string.length; i++)
    {
        for(var j = 0; j < vowels.length; j++)
        {
            if(string.charAt(i) == vowels.charAt(j))
            {
                if(vowlesInString.includes(string.charAt(i)) == false)
                {
                    vowlesInString.push(string.charAt(i));
                }
            }
        }
    }
    
    var vowelsInStr = vowlesInString.join(", ");
    return vowelsInStr;
}

console.log(vowels("Umuzi"));