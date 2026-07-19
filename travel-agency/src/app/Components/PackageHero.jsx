import { MapPin, Clock, IndianRupee} from "lucide-react"

function PackgaeHero({pkg, onBook}){
    return(
        <div className="mt-5 mx-auto max-w-7xl px-6">
            <div className="relative h-112.5 overflow-hidden rounded-3xl shadow-lg" data-aos="fade-up">
                <img src={pkg.image} alt=""
                className="h-full w-full object-cover" />
                 <div className="absolute inset-0 bg-black/50"></div>
                 <div className="absolute">
                    
                 </div>
                 <div className="absolute inset-0 flex items-center p-8 md:p-12">
                    <div className="text-white">
                        <h1 className="text-4xl font-bold">{pkg.title}</h1>
                         <div className="mt-5 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-teal-400" />
                      <p>{pkg.location}</p>
                       </div>
                       <div className="mt-3 flex items-center gap-2">
                       <Clock className="h-5 w-5 text-teal-400" />
                        <p>{pkg.duration}</p>
                      </div>
                      <div className="mt-5 flex items-center gap-2">
                        <IndianRupee className="h-5 w-5 text-teal-400"/>
                         <p className="text-3xl font-bold text-teal-400">
                          {pkg.price}
                          </p>
                         </div>
                  <button onClick={onBook} className="mt-6 rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700">
                   Book Now
                  </button>
                    </div>

                 </div>
               </div>

               </div>
    )
}
export default PackgaeHero