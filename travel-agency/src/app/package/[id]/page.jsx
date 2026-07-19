
import PackageDetailsContent from "@/app/Components/PackageDetailsContent";
import packages from "@/app/data/packge";
export default async function PackageDetails({ params }) {
   const{id}= await params
  

  const pkg = packages.find(
    (item) => item.id === Number(id)
  );
  if(!pkg){
    return <div>Package not found</div>
  }
    
  return (
    <>
     <PackageDetailsContent pkg={pkg}/>
    </>
    
  );
}