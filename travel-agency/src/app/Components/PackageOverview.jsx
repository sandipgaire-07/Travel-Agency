import { MapPin, Clock, DollarSign } from "lucide-react";
function PackageOverview({pkg}){
  return(
      <div className="mt-10 mx-auto max-w-7xl px-6" data-aos="fade-up">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900">
            About This Trip
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            {pkg.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
              <MapPin className="h-5 w-5 text-teal-600"/>
              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>
                <p className="font-semibold text-slate-900">
                  {pkg.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
              <Clock className="h-5 w-5 text-teal-600"/>
              <div>
                <p className="text-sm text-slate-500">
                  Duration
                </p>
                <p className="font-semibold text-slate-900">
                  {pkg.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 sm:col-span-2">
              <DollarSign className="h-5 w-5 text-teal-600"/>
              <div>
                <p className="text-sm text-slate-500">
                  Price
                </p>
                <p className="font-semibold text-slate-900">
                  ${pkg.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PackageOverview;