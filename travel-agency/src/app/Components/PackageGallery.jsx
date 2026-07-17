function PackageGallery({pkg}){

  return(
      <div className=" mt-10 mx-auto max-w-7xl px-6">

        <h2 className="text-3xl font-bold text-slate-900">
          Gallery
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {pkg.gallery.map((image,index)=>(

            <div
              key={index}
              className="h-72 overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`${pkg.title}`}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
  )
}

export default PackageGallery;