import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";


const Calender=()=>{
    return(
        <>
         <h1 className="text-center" style={{fontFamily: 'Croissant One'}}>React Calender</h1>
        <div style={{width:"600px",marginLeft:"auto",marginRight:"auto",marginTop:"100px"}}>
           
      <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}

      />

</div>
        </>
    )
}

export default Calender;