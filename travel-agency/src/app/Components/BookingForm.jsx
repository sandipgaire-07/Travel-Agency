import { XIcon, } from "lucide-react";
import Input from "./Input"
import { useEffect } from "react";
import { useForm, } from "react-hook-form";

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
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 px-4">
            <div className=" relative w-full text-center max-w-2xl rounded-2xl bg-white p-6 space-y-5">
            <button className="absolute right-4 top-4 text-slate-500 hover:text-slate-900">
          <XIcon className="h-6 w-6" onClick={close}/>
          </button>

        <h2 className="text-2xl font-bold text-slate-900">
          Book Your Trip
        </h2>
        
        <p className="mt-2 text-slate-600">
          Fill the form below
        </p>
        <form  onSubmit={handleSubmit(onSubmit)} className="mt-6 grid md:grid-cols-2 gap-4">
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
            rows={4}
            placeholder="Additional message (Optional)"
            className="w-full md:col-span-2  rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-600"
            register={register("AdditonalMessage")}
          />

          <button type="submit"
            className="rounded-lg bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700 sm:col-span-2"
          >
            Submit Booking
          </button>
        </form>


            </div>
                
          </div>
    )
}
export default BookingForm;