var interval;
var msec =0
var sec = 0
var min = 0
var MS = document.getElementById("ms");
var S = document.getElementById("s");
var M = document.getElementById("m");
function Timer(){
    msec++;
    MS.innerHTML= msec;
    if(msec>= 100)
    {
        sec++;
        S.innerHTML= sec;
        msec=0;
        MS.innerHTML= msec;
        if(sec>59)
        {
            min++;
            sec=0;
            S.innerHTML= sec;
            M.innerHTML= min;
        }
    }
}

function start()
{
   
    interval = setInterval(Timer,10); 
}
function Stop(){
    setTimeout(function(){
            clearInterval(interval)
    })
}
function Reset(){
    msec = 0 
    MS.innerHTML= msec;
    sec = 0
    S.innerHTML= sec;
    min = 0
    M.innerHTML= min;
    Stop();
}
