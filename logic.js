var sec=0;
var min=0;
var h=0;
var d=new Date();
setInterval(
    function(){
        d=new Date();
        sec=d.getSeconds()*6;
        min=d.getMinutes()*6;
        h=d.getHours()*30 + Math.round(min/12);
        document.getElementById("seconds-hand").style.transform="rotate(" + sec + "deg)";
        document.getElementById("minute-hand").style.transform="rotate(" + min + "deg)";
        document.getElementById("hour-hand").style.transform="rotate(" + h + "deg)";
    },1000
);