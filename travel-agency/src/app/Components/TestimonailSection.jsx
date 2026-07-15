import testimonials from "../data/testimonal";
import TestimonailCard from "./TestimonailCard";

function TestimonialSection(){
    return(
    <section className="py-20">
    <div className="max-w-7xl mx-auto px-6">
    <div className="mx-auto max-w-2xl text-center">

  {/* <p className="font-semibold uppercase tracking-wide text-teal-600">
    Testimonials
  </p> */}

  <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
    What Our Travelers Say
  </h2>

  <p className="mt-4 text-slate-600">
    Hear from travelers who explored the world with us and created unforgettable memories.
  </p>


</div>
        <div className="mt-14 overflow-hidden">
        <div className="flex w-max gap-6 p-6 animate-marquee">
          {
           testimonials.map((testi)=>(
              <TestimonailCard key={testi.id} {...testi}/>
            ))
          }
        </div>
       </div>
        </div>
        </section>


    )
}
export default TestimonialSection;