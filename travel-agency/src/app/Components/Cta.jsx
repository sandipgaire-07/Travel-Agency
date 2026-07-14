"use client"
import { useState } from "react";
import BookingForm from "./BookingForm";
function CTA() {
  const[openBooking, setOpenBooking]=useState(false)
  return (

    <section
      className=" mt-5 relative overflow-hidden bg-cover bg-center py-20 sm:py-24 md:py-32"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42EEDNZpY-pNd4qf3MaXU3hkWn9PgHrvf2wbQpZBb3w&s=10')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative mx-auto max-w-3xl px-6 text-center text-white sm:px-8">

        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Ready for your next adventure?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with us.
        </p>
        <button onClick={()=>setOpenBooking(true)}
          className="mt-8 rounded-full bg-teal-600 px-7 py-3 text-sm font-semibold text-white transition  hover:bg-teal-700 sm:px-8 sm:text-base" >
          Book Your Trip
        </button>

      </div>
              {openBooking && (<BookingForm open={openBooking} close={()=>setOpenBooking(false)}/>)}
    </section>
   
  );
}

export default CTA;