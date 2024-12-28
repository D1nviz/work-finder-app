import { Offer } from "@/types";
import { Badge } from "./badge";
import { Clock, MapPin } from "lucide-react";

type CardProps = {
  item: Offer;
};

export default function Card({ item }: CardProps) {
  const { title, description, tags, location, createdAt, company, priceRange } =
    item;

  return (
    <div className="rounded-xl w-full p-7 border bg-white hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <p className="text-xl text-black font-semibold mt-3">{priceRange}</p>
      <p className="mt-2">{description}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <p className="font-bold text-lg mt-3">{company}</p>
      <p className="flex items-center gap-1 mt-1">
        <MapPin className="w-5 h-5" /> {location}
      </p>
      <p className="flex items-center gap-2 mt-2">
        <Clock className="w-5 h-5" /> {createdAt}
      </p>
    </div>
  );
}
