"use client"
import TicketBookingForm from "../Components/TicketBookingForm";
import TicketCard from "../Components/TicketCard";
import tickets from "../data/tickets";
import { useState } from "react";
function TicketPage(){
    const [ticketType, setTicketType] = useState(null);
    
    return(
        <>
         <section className="py-20">
            <h1 className="Font-bold text-slate-900 text-3xl md:text-5xl text-center">Book Your Tickets</h1>
            <p className="mt-6 leading-8 text-slate-600 text-center">
           Reserve domestic and international flights, bus tickets, and cable car rides with ease.
          </p>
            <div className="mt-5 mx-auto max-w-7xl grid gap-3 md:grid-cols-3">
                
                {
                    tickets.map((ticket)=>(
                        <TicketCard key={ticket.id} ticket={ticket} onBook={(title,type)=>setTicketType({title,type})}/>
                    ))
                }
            </div>
        </section>
        {
            ticketType && (<TicketBookingForm ticketInfo={ticketType} close={()=>setTicketType(null)}/>)
        }
        </>
       
    )
}
export default TicketPage;