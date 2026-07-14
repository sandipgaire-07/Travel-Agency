import { XIcon, Xwha } from "lucide-react";
import Input from "./Input"
import { useEffect } from "react";
function BookingForm({open,close}){
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
    return(
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 px-4">
            <div className=" relative w-full text-center max-w-md rounded-2xl bg-white p-6 space-y-5">
            <button className="absolute right-4 top-4 text-slate-500 hover:text-slate-900">
          <XIcon className="h-6 w-6" onClick={close}/>
          </button>

        <h2 className="text-2xl font-bold text-slate-900">
          Book Your Trip
        </h2>
        
        <p className="mt-2 text-slate-600">
          Fill the form below
        </p>
        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <Input placeholder="Your Name" />

          <Input
            type="email"
            placeholder="Email Address"
          />

          <Input
            type="tel"
            placeholder="Phone Number"
          />

          <Input placeholder="Destination" />

          <Input type="date" />

          <Input
            type="number"
            placeholder="Number of Travelers"
          />

           <textarea
            type="text"
            rows="4" cols="50"
            placeholder="Additional message (Optional)"
             className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-600"
          />

          <button
            type="submit"
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