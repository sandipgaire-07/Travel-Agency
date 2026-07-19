"use client"
import PackageGallery from "./PackageGallery";
import PackageOverview from "./PackageOverview";
import PackageFeatures from "./PackageHighlights";
import PackgaeHero from "./PackageHero";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft,  } from "lucide-react";
import BookingForm from "./BookingForm";
function PackageDetailsContent({pkg}){
    const[openBooking,setOpenBooking]=useState(false)
    return(
   <>
      <div className="p-5">
    <Link href="/package" className=" group mt-6 inline-flex items-center gap-2 rounded-3xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700">
      <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"/>
      Back to Packages
      </Link>
  </div>
    <section className="">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          More info about the package
        </h1>
      </div>
        <PackgaeHero pkg={pkg} onBook={()=>setOpenBooking(true)}/>
      <PackageOverview pkg={pkg}/>
      <PackageFeatures pkg={pkg}/>
      <PackageGallery pkg={pkg}/>
    </section>
    {
        openBooking && (<BookingForm close={()=>setOpenBooking(false)} destination={pkg}/>)
    }
</>
     
    )
}
export default PackageDetailsContent;