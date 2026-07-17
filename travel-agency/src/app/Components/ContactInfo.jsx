import contactInfo from "../data/contactinformation";

function ContactInfo(){

  return(
    <div className="space-y-6">

      {contactInfo.map((item)=>{

        const Icon=item.icon;

        return(
          <div
            key={item.id}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" data-aos="fade-up">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-teal-700">
              <Icon className="h-6 w-6 text-white"/>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 whitespace-pre-line text-slate-600">
                {item.value}
              </p>
            </div>

          </div>
        )

      })}

    </div>
  )
}

export default ContactInfo;