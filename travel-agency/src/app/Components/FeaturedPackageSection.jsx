"use client"
import packages from "../data/packge";
import PackageCard from "./PackageCard";
import { useState } from "react";
import BookingForm from "./BookingForm";

function FeaturedPackage(){
  const[openBooking, setOpenBooking]=useState(false)
    return(
  <section className="py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-2xl text-center">
      <p className="font-semibold uppercase tracking-wide text-teal-600">
        Featured Packages
      </p>

      <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
        Discover Your Next Adventure
      </h2>

      <p className="mt-4 text-slate-600">
        Choose from our carefully curated travel experiences designed for unforgettable journeys.
      </p>
    </div>


    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {packages.map((pack) => (
        <PackageCard
          key={pack.id}
          {...pack}
          onBook={()=>setOpenBooking(true)}
        />
      ))}
    </div>
  </div>
  {openBooking && (<BookingForm open={openBooking} close={()=>setOpenBooking(false)} />)}
</section>
    )
}
export default FeaturedPackage