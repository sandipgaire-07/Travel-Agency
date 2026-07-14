import { Mail, MapPin, Phone } from "lucide-react";

function Footer(){
    return(
        <footer className=" mt-10 bg-slate-900 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 sm:grid-col-2 lg:grid-cols-3">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                          logo
                             </h3>
                   <p className="mt-4 max-w-xs text-sm leading-6">
                  Discover beautiful destinations and create unforgettable memories with us.
                       </p>
                    </div>
                    <div>
                 <h4 className="text-lg font-semibold text-white">
                   Quick Links
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm">
                     <li>Home</li>
                     <li>Destinations</li>
                      <li>Packages</li>
                      <li>Contact</li>
                        </ul>
                       </div>
                       <div>

                   <h4 className="text-lg font-semibold text-white">
                        Contact
                    </h4>
                        <div className="mt-4 space-y-4 text-sm">
                        <p className="flex gap-3">
                        <MapPin size={18}/>
                        Kathmandu, Nepal
                        </p>
                        <p className="flex gap-3">
                        <Mail size={18}/>
                        hello@travel.com
                        </p>
                        <p className="flex gap-3">
                        <Phone size={18}/>
                        +977 9800000000
                        </p>
                        </div>
                        </div>
                     </div>
                     <div className="border-t border-slate-700/50">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
    <p>
      © 2026 Wayfare. All rights reserved.
    </p>

    <div className="flex gap-5">
      <a
        href="#"
        className="transition hover:text-white"
      >
        Privacy Policy
      </a>

      <a
        href="#"
        className="transition hover:text-white"
      >
        Terms
      </a>
    </div>
  </div>
</div>
                </div>
             </footer>
        )
        }
export default Footer;