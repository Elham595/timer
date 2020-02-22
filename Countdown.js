///////////////////////////// DECLARATIONS ////////////////////
let title=document.getElementById("input1"),
    day=document.getElementById("input2"),
    hour=document.getElementById("input3"),
    minute=document.getElementById("input4"),
    second=document.getElementById("input5"),
    remained_days=document.getElementById("days"),
    remained_hours=document.getElementById("hours"),
    parent=document.getElementById("parent"),
    ///////////////////remained_days=document.getElementById("days"),----->countdown1.html
    remained_minutes=document.getElementById("minutes"),
    remained_seconds=document.getElementById("seconds"),
    start=document.getElementById("start_btn");
    //////// CURRENT DATE ////////
    let thedate=new Date();
        console.log(thedate);
/////////////////////////// ONCLICK ON  ///////////////////////
start.onclick=()=>{

    if(title.value=="")
        title.placeholder="please fill in the field";
    else if(day.value=="")
          day.placeholder="please fill in the field"; 
    else if(hour.value=="")
            hour.placeholder="please fill in the field";
    else if(minute.value=="")
            minute.placeholder="please fill in the field";
    else if(second.value=="")
            second.placeholder="please fill in the field";
    else{ 
   /* let paragraph=document.createElement('p'),
       text=document.createTextNode('YEARS :') ;
    paragraph.appendChild(text);*/

      //remained_years.innerHTML=(input2.value)-(thedate.getFullYear());
      //remained_months.innerHTML=(input3.value)-(thedate.getMonth()+1);
      parent.style.display="block";
      remained_days.innerHTML=(day.value)-(thedate.getDate())+" "+"DAYS";
      remained_hours.innerHTML=(hour.value)-(thedate.getHours())+" "+"HOURS";
      remained_minutes.innerHTML=(minute.value)-(thedate.getMinutes())+" "+"MINUTES";
      remained_seconds.innerHTML=(second.value)-(thedate.getSeconds())+" "+"SECONDS";

      if(remained_days==0)
                { alert("TIME IS UP")   ;}
}}