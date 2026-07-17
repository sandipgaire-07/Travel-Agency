import { Check, X } from "lucide-react";

function PackageFeatures({ pkg }) {

  return (
      <div className=" mt-10 mx-auto max-w-7xl px-6" data-aos="fade-up">

        <div className="grid gap-8 md:grid-cols-2">

          {/* Included */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="text-3xl font-bold text-slate-900">
              Trip Highlights
            </h2>

            <div className="mt-8 space-y-4">

              {pkg.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <Check className="h-5 w-5 text-teal-600" />

                  <p className="text-slate-700">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>


          {/* Not Included */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="text-3xl font-bold text-slate-900">
              What's Not Included
            </h2>

            <div className="mt-8 space-y-4">

              {pkg.notIncluded.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <X className="h-5 w-5 text-red-500" />

                  <p className="text-slate-700">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
  );
}

export default PackageFeatures;