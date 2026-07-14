function TestimonailCard({image,name,country,review}){
    return(
        <div className="w-[320px] rounded-3xl p-6 bg-white shadow-md">
            <div className="flex justify-center">
            <img
             src={image}
            alt={".."}
            className="h-20 w-20 rounded-full border-4 border-teal-100 object-cover"
             />
             </div>
             <p className="mt-6 text-center text-lg italic leading-8 text-slate-600">
             "{review}"</p>
             <div className="mx-auto mt-6 h-px w-16 bg-slate-200"></div>
             <h3 className="mt-6 text-center text-lg font-semibold text-slate-900">
                 {name}
              </h3>
              <p className="mt-1 text-center text-sm text-slate-500">
               {country}
            </p>

        </div>
    )
}
export default TestimonailCard;