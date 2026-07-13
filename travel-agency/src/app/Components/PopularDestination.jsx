import destinations from "../data/destination"
import DestinationCard from "./DestinationCard"
function PopularDestination(){
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

           <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-wide text-teal-600">
            Popular Destinations
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore the world's most beautiful places
          </h2>

          <p className="mt-4 text-slate-600">
            Discover handpicked destinations and create unforgettable
            travel memories.
          </p>
        </div>
        {/* destination cards */}
           <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {
                    destinations.map((destination)=>(
                        <DestinationCard key={destination.id} {...destination}/>
                    ))
                }
           </div>

            </div>

        </section>
    )
}
export default PopularDestination;