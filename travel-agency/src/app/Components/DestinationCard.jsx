import { MapPin } from "lucide-react";

function DestinationCard({ name, location, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md" data-aos="fade-up">
      <img
        src={image}
        alt={name}
        className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{name}</h3>

        <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
          <MapPin className="h-4 w-4 text-amber-400" />
          <span>{location}</span>
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;