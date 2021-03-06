 // Set the date we're counting down to

 let countDownDate = new Date("Sep 30, 2021 09:00:00").getTime();

 // Update the count down every 1 second
 let x = setInterval(function() {
 
   
   // Get todays date and time
   let now = new Date().getTime();
 
   
   // Find the distance between now an the count down date
   
   let distance = countDownDate - now;
 
   // Time calculations for days, hours, minutes and seconds
   let days = Math.floor(distance / 
   (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 
   60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance 
   % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance 
   % (1000 * 60)) / 1000);
 
   // Display the result in an element with id="timer"
     document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
     document.getElementById("timer").innerHTML = `
    <span class="circle">
                ${ days } <br> days
    </span>
    <span class="circle">
                ${ hours } <br> hours
    </span>
    <span class="circle">
                ${ minutes } <br> minutes
    </span>
    <span class="circle">
                ${ seconds } <br> seconds
    </span>
     `
 
   // If the count down is finished, write some text 
   if (distance < 0) {
     
   clearInterval(x);
     document.getElementById("timer").innerHTML  = "EXPIRED";
   }
 }, 1000); 