function toFahrenheit(celsius)
{
    var fahrenheit = ((celsius * (9/5)) + 32);
    return fahrenheit;
}

function toCelsius(fahrenheit)
{
    var celsius = ((fahrenheit - 32) * (5/9));
    return celsius;
}

console.log(toFahrenheit(25));
console.log(toCelsius(68));