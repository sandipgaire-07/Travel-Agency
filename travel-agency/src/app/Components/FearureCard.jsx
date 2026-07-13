function FeatureCard({icon:Icon, title, description}){
    return(
        <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-transition-y-1 hover:shadow-xl" data-aos="fade-up">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
              <Icon className="h-12 w-12"/>
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
            {title}
            </h3>
            <p className="mt-3 text-slate-600">
              {description}
            </p>
        </div>
    )
}
export default FeatureCard;