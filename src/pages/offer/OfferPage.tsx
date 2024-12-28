import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import { mockOfferDetails } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function OfferPage() {
  const { id } = useParams();

  const item = mockOfferDetails.find((item) => item.id === id);

  if (!item) {
    return <div>Not found</div>;
  }

  const {
    title,
    priceRange,
    description,
    tags,
    company,
    location,
    createdAt,
    requirements,
    responsibilities,
  } = item;

  return (
    <div className="rounded-xl w-full px-7 pt-8 pb-9 border bg-white my-5 ">
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Головна</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <p className="text-xl text-black font-semibold mt-2">{priceRange}</p>
      <div className="flex gap-2 mt-2.5 flex-wrap">
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
      <h3 className="text-xl font-bold mt-3">Опис</h3>
      <p className="mt-1">{description}</p>
      <h3 className="text-xl font-bold mt-3">Вимоги</h3>
      <p className="mt-1">{requirements}</p>
      <h3 className="text-xl font-bold mt-3">Обов'язки</h3>
      <p className="mt-1">{responsibilities}</p>
      <Button className="mt-5" size="lg">
        Відгукнутись
      </Button>
    </div>
  );
}
