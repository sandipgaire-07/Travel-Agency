function TicketCard({ticket, onBook}){
    return(
        <div className="group rounded-3xl shadow-lg  bg-white transition hover:-translate-y-2 px-4 py-3" data-aos="fade-up">
            <div className="w-full h-72 rounded-xl overflow-hidden">
                <img src={ticket.image} alt="" className="w-full h-full object-cover transition duration-300 group-hover:scale-100"/>
            </div>
            <div className="py-3 px-4">
                <h2 className="text-xl font-bold text-slate-600 md:text-2xl">
                    {ticket.title}
                </h2>
                 <div className="mt-5 grid gap-3 md:grid-cols-2">

        {
          ticket.types.map((type)=>(
            <button
              key={type}
              onClick={()=>onBook(ticket.title,type)}
              className="rounded-xl bg-teal-600 px-4 py-3 font-semibold text-white hover:bg-teal-700"
            >
              {type}
            </button>
          ))
        }

      </div>
            </div>
           
        </div>

    )
}
export default TicketCard