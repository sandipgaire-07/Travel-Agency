import PackageGallery from "@/app/Components/PackageGallery";
import PackgaeHero from "@/app/Components/PackageHero";
import PackageFeatures from "@/app/Components/PackageHighlights";
import PackageOverview from "@/app/Components/PackageOverview";
import packages from "@/app/data/packge";

export default async function PackageDetails({ params }) {
   const{id}=await params
  

  const pkg = packages.find(
    (item) => item.id === Number(id)
  );
  console.log(pkg);
  


  if(!pkg){
    return <div>Package not found</div>
  }


  return (
    <>
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          More info about the package
        </h1>
      </div>
        <PackgaeHero pkg={pkg}/>

      <PackageOverview pkg={pkg}/>

      <PackageFeatures pkg={pkg}/>

      <PackageGallery pkg={pkg}/>
    </section>
   
     

    </>
    
  );
}