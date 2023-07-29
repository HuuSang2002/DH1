
function printTime()
{
    var d = new Date();
    var hour = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    switch(day)
    {
        case 0: 
        day ="Chủ Nhật"
        break;
        case 1: 
        day ="Thứ Hai"
        break;
        case 2: 
        day ="Thứ Ba"
        break;
        case 3: 
        day ="Thứ Tư"
        break;
        case 4: 
        day ="Thứ Năm"
        break;
        case 5: 
        day ="Thứ Sáu"
        break;
        case 6: 
        day ="Thứ Bảy"
        break;
    }

    if(hour <10)
    {
        hour="0"+hour;
    }
    if(mins <10)
    {
        mins="0"+mins;
    }
    if(secs <10)
    {
    secs="0"+secs;
    }
    month = month +1; document.getElementById("test").innerHTML = hour +":"+mins+":"+secs;
    document.getElementById("ttt").innerHTML = day + ", " + date + "/" + month +"/"+year;
}
setInterval(printTime,1000);