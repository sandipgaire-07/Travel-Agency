function OurStory(){
   
    return(
        
        <section className="py-20">
        <div className="mx-auto max-w-7xl grid gap-12 px-6 md:grid-cols-2">
        <div >
                    <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80" alt="image"
                    className="h-80 w-full rounded-4xl object-cover shadow-lg" data-aos="fade-up" />
                </div>
            <div data-aos="fade-up">
          <p className="font-semibold uppercase tracking-wide text-teal-600">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Turning travel dreams into unforgettable memories
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            At Wayfare, we believe travel is more than visiting places.
            It is about discovering new cultures, creating connections,
            and experiencing moments that stay with you forever.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our team carefully designs travel experiences that make every
            journey comfortable, exciting, and memorable.
          </p>

            </div>
            </div>

        </section>
    
    )
}
export default OurStory