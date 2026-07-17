import Image from "next/image"; 
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";
function PackageCard({
  title,
  location,
  price,
  image,
  popular,
  duration,
  onBook,
  id
}) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className=" h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

        {popular && (
          <span className="absolute left-4 top-4 rounded-full bg-teal-600 px-4 py-1 text-sm font-semibold text-white">
            Popular
          </span>
        )}
         </div>
      <div className="p-5">
         <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={16}/>
          {location}
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <Clock size={16}/>
          {duration}
        </div>
        <p className="mt-4 text-2xl font-bold text-teal-700">
          ${price}
        </p>

        
        <div className="mt-5 flex gap-3">

          <Link href= {`/package/${id}`}className="flex-1 rounded-lg border border-teal-600 px-4 py-2 text-sm text-center font-semibold text-teal-600 transition hover:bg-teal-50">
            View Details
          </Link>
          <button className="flex-1 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700" onClick={onBook}>
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;