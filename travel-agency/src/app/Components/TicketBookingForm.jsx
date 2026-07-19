import { XIcon } from "lucide-react";
import Input from "./Input";
import { useForm } from "react-hook-form";

function TicketBookingForm({ticketInfo,close}){
    const{
        register,
        handleSubmit,
        reset
    }=useForm()
    const onSubmit=(data)=>{
        const message=`
        *Ticket Booking Request*

        Transport: ${data.TicketType}

        Type: ${data.type}

        From: ${data.from}

        To: ${data.to}

        Date: ${data.date}

        Time: ${data.time}

        Travellers: ${data.travelers}

        Name: ${data.name}

        Phone: ${data.phoneNumber}
        `;
           const phoneNumber = "977";
           const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
           window.open(whatsappUrl, "_blank");

        reset();
        close();
    }
    return(
        <>
        <div className="fixed z-50 inset-0 flex bg-black/50 items-center justify-center">
            <div className="mx-auto w-full rounded-2xl max-w-2xl bg-white md:max-w-4xl p-6">
                <div className="w-full flex items-center justify-between">
                    <h2>Fill up your details</h2>
                    <XIcon onClick={close} size={25}/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4 h-100 grid gap-3 md:grid-cols-2 overflow-y-auto">
                     <Input type={"text"} register={register("name")} placeholder={"Enter Your Name"}/>
                     <Input type={"email"} register={register("email")}placeholder={"Enter Your Email"}/>
                     <Input type={"text"} register={register("phoneNumber")} placeholder={"Enter Your PhoneNumber"}/>
                     <Input type={"text"} register={register("TicketType")} placeholder={"ticket type"} defaultValue={ticketInfo.title}/>
                     <Input type={"text"} register={register("type")} placeholder={"type"} defaultValue={ticketInfo.type}/>
                     <Input type={"text"} register={register("from")} placeholder={"Enter Your Current Location"}/>
                     <Input type={"text"} register={register("destination")} placeholder={"Enter Your Destination"}/>
                     <Input type={"date"} register={register("date")} placeholder={"Enter Date"}/>
                     <Input type={"time"} register={register("time")} placeholder={"Enter Time"} />
                     <Input type={"number"} register={register("NumberOfTravelers")} placeholder={"Number of Travelers"} min="1" max="10"/>
                     <button className="rounded-lg bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700 sm:col-span-2">Submit Booking</button>
                </form>

            </div>
        </div>
        </>
    )
}
export default TicketBookingForm;