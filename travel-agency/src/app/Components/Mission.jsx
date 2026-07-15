import missionVision from "../data/missionandvision"
function MissionandVision(){
    return(
        <section className="py-20">
            <div className="mx-auto max-w-7xl grid gap-8 px-6 md:grid-cols-2">
                {missionVision.map((item)=>{

          const Icon = item.icon;

          return(
            <div
              key={item.type}
              className={`rounded-3xl p-8 ${item.style}`}
              data-aos="fade-up"
            >
          <div className="flex items-center gap-4">
           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <Icon className="h-6 w-6" />
            </div>
           <p className="font-semibold uppercase tracking-wide opacity-80">
               {item.type}
                </p>
               </div>
               
              <h2 className="mt-4 text-3xl font-bold">
                {item.title}
              </h2>

              <p className="mt-5 leading-8 opacity-90">
                {item.description}
              </p>

            </div>
          )
        })}

            </div>

        </section>
    )
}
export default MissionandVision