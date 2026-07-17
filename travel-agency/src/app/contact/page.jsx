import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";

function ContactUs(){
    return(
    <main>
        <section className="py-10">
            <div className="mx-auto max-w-2xl text center px-6" data-aos="fade-up">
                <p className="font-semibold uppercase tracking-wide text-teal-600">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            We'd Love to Hear From You
          </h1>

          <p className="mt-4 leading-8 text-slate-600">
            Have questions about our travel packages or need help planning your
            next adventure? Reach out to us and we'll be happy to assist you.
          </p>

            </div>
         
        </section>
        <section className="py-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
                <ContactForm/>
                <ContactInfo/>

            </div>

        </section>
    </main>
    )
  
}
export default ContactUs;