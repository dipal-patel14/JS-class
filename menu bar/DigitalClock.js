let digitalClock = () => {

    let today = new Date();  //using this date constructor we can acheive date time etc.
   
    let year = today.getYear();
    if(year < 1000){
      year += 1900;
    }
    let month = today.getMonth();
    let day = today.getDay();
    let montharray = new Array("Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec");
    let dayarray = new Array("Sun","Mon","Tue","Wed","Thur","Fri","Sat");
     date = today.getDate();
     hour = today.getHours();  //for hours we need to use get hours method.
     minutes = today.getMinutes();
     seconds = today.getSeconds();
    
     
     document.getElementById("year").innerHTML = year;
     document.getElementById("month").innerHTML = montharray[month];
     document.getElementById("day").innerHTML = dayarray[day];
     document.getElementById("date").innerHTML = date;
     document.getElementById("hours").innerHTML = hour; //hours ne aapde hours var ma save karie chai
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;
     
     setTimeout( digitalClock,500); //time will refresh automatic.
    }

    digitalClock();