import features from "../data/feature";
import FeatureCard from "./FearureCard";
function FeatureSection(){
    return(
        <>
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div data-aos="fade-up">
                <p className="text-teal-600 font-semibold uppercase tracking-wide">
                   Why Choose Us
                   </p>

                   <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                    Travel experiences made unforgettable
                     </h2>

                  <p className="mt-6 max-w-lg text-slate-600">
                    We help you discover amazing destinations with
                    comfortable planning and memorable experiences.
                      </p>
                </div>
                {
                    features.map((feature)=>(
                        <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} description={feature.description}/>
                    ))
                }
                </div>

            </div>
        </section>
        </>
    )
}

export default FeatureSection