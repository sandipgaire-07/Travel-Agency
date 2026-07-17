"use client"
import { useState } from "react";
import PackageCard from "../Components/PackageCard"
import packages from "../data/packge"
import BookingForm from "../Components/BookingForm";
function PackagePage(){
  const [openBooking, setOpenBooking] = useState(false);
  const [selected, setSelected] = useState(null);
    return(
              <main>
                <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <p className="font-semibold uppercase tracking-wide text-teal-600">
            Our Packages
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore Our Travel Packages
          </h1>

          <p className="mt-6 leading-8 text-slate-600">
            Discover carefully selected travel experiences designed to make every
            journey unforgettable.
          </p>

        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-4 md:grid-cols-3">
               {
                packages.map((pack)=>(
                  <PackageCard key={pack.id} {...pack} onBook={()=>{
                    setSelected(pack)
                    setOpenBooking(true)}}  />
                ))
               }
        </div>
        {openBooking && (<BookingForm open={openBooking} destination={selected} close={()=>setOpenBooking(false)}/>)}
      </section>

</main>
    )
}
export default PackagePage