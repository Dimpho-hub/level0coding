function ConvertToTime(num){
    var hours = parseInt(num / 60);
    var minutes = parseInt(num % 60);
    var hour = ' hour, ';
    var minute = ' minute';

    if (hours != 1)
    {
        hour = ' hours, ';
    }
    if (minutes != 1)
    {
        minute = ' minutes';
    }

    var time = hours + hour + minutes + minute;
    return time;
}

console.log(ConvertToTime(121));