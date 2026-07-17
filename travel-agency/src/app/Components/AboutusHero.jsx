function AboutusHero(){
    return(
        <section className="relative min-h-svh flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEAsi0nnHzokJnHS1cEwdLIyazFwlYw9KGLuPKYfxUQ&s=10" alt="travel" 
            className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative px-6 h-full  md:px-16 ">
                <div className="max-w-3xl text-white p-6" data-aos="fade-up">
         <p className="uppercase tracking-widest text-teal-100 font-semibold">
           About Us
         </p>

      <h1 className="mt-4 text-4xl font-bold md:text-5xl">
        Creating unforgettable journeys around the world
      </h1>

      <p className="mt-5 text-lg text-slate-200">
        We help travelers discover amazing destinations
        with comfortable planning and memorable experiences.
      </p>
    </div>
            </div>
         </section>
    )
}
export default AboutusHero