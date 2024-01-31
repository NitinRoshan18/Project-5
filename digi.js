function liveClock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h==0){
        h = 12;
    }
    if(h>12){
        h = h-12; //12hour format 
        session = "PM";
    }

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    //alternate method 
    /* if(h<10){
        h = "0" +h;
    }*/

    document.getElementById("DigiClock").innerHTML = h+ ":" +m+ ":" +s+  " " +session;
    setTimeout(liveClock, 1000);
}
liveClock();