import { XIcon, } from "lucide-react";
import Input from "./Input"
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function BookingForm({open,close,destination}){
    useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  }=useForm();

  const onSubmit=(data)=>{
    const message= `
    *New Booking Request*
    Name:${data.Name}
    Email:${data.email}
    PhoneNumber:${data.PhoneNumber}
    Destination:${data.destination}
    Travel Date:${data.date}
    No_Of_Travelers:${data.No_Of_Travelers}
    Additional Message:${data.AdditonalMessage||""}`
    const phoneNumber = "977";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    reset();
    close();
    };
 
    return(
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
            <div className=" relative w-full max-w-2xl rounded-2xl bg-white p-7">
          <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold md:text-2xl text-slate-900">
          Book Your Trip
        </h2>
        <XIcon size={25} onClick={close}/>
          </div>
      
        <form  onSubmit={handleSubmit(onSubmit)} className="mt-4 h-100 grid gap-2 md:grid-cols-2 overflow-y-auto">
          <Input type="text" placeholder="Enter your Name"
          register={register("Name",{
            required:"Name is Required",
          })} errors={errors.Name}/>

          <Input
            type="email"
            placeholder="Email Address"
            register={register("email",{
               required:"Email is Required",
            })} errors={errors.email}
          />

          <Input
            type="tel"
            placeholder="Phone Number"
          register={register("PhoneNumber",{
              required:"Phone Number is Required",
          })} errors={errors.PhoneNumber}
          />

          <Input placeholder="Destination" defaultValue={destination?.location}  register={register("destination",{
            required:"destination is required"
          })}  errors={errors.destination}/>

          <Input placeholder="duration" defaultValue={destination?.duration}  register={register("Duration",{
            required:"Duration is required."
          })} errors={errors.destination} />


          <Input type="date" register={register("date",{
              required:"Date is Required",
          })} errors={errors.date}/>

          <Input
            type="number"
            placeholder="NumberOfTravelers"
            register={register("No_Of_Travelers",{
                required:"please enter number of travelers",
                min:{
                  value:1,
                  message:"At least one traveler must be selected.."
                }
            })} errors={errors.No_Of_Travelers}
          />

           <textarea
            type="text"
            rows={5}
            placeholder="Additional message (Optional)"
            className="w-full md:col-span-2 mt-2  rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-600"
            register={register("AdditonalMessage")}
          />

          <button type="submit"
            className="rounded-lg mt-2 bg-teal-600 py-3 px-4 font-semibold text-white transition hover:bg-teal-700 sm:col-span-2">
            Submit Booking
          </button>
        </form>


            </div>
                
          </div>
    )
}
export default BookingForm;