"use client"
import packages from "../data/packge";
import PackageCard from "./PackageCard";
import { useState } from "react";
import BookingForm from "./BookingForm";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function FeaturedPackage(){
  const[openBooking, setOpenBooking]=useState(false)
  const[selected,setSelected]=useState(null)
  
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
          onBook={()=>{
            setSelected(pack)
            setOpenBooking(true)
          }
          }
        />
      ))}
    </div>
       <div className="mt-10 flex justify-center">
        <Link href={`/package/`}>
        <button
    className="group flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
  >
    View More Packages
    <ArrowRight 
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    />
  </button>
        </Link>
  
</div>
  </div>
  {openBooking && (<BookingForm open={openBooking} destination={selected} close={()=>setOpenBooking(false)} />)}
</section>
    )
}
export default FeaturedPackage