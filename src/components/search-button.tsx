import * as React from "react";
import { ChevronRight, Search, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import mockData from "@/lib/constants";
import { Link } from "react-router-dom";
import NoResultsImg from "@/assets/no_result.jpg";
import { ScrollArea } from "./ui/scroll-area";

export default function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const searchResults = React.useMemo(() => {
    return search.length > 2
      ? mockData.filter((item) =>
          item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : [];
  }, [search]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const renderSearchResultItems = () => {
    if (!search.length) {
      return (
        <p className="text-lg text-zinc-700 flex justify-center gap-2 pt-3">
          <SearchIcon />
          Почніть пошук...
        </p>
      );
    }

    if (searchResults.length > 0) {
      return (
        <ul className="flex flex-col gap-2 w-full">
          {searchResults.map((item) => (
            <li key={item.id}>
              <Link
                className="flex items-center gap-1 py-2 px-4 w-full bg-zinc-100 rounded-md"
                to={`offers/${item.id}`}
                key={item.id}
              >
                <ChevronRight className="h-4 w-4 inline-block" />
                {item.title}
                <span className="text-zinc-600 ml-auto">
                  ({item.priceRange})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="flex flex-col items-center">
        <p className="text-lg text-muted-foreground">Нічого не знайдено</p>
        <img
          src={NoResultsImg}
          alt="No results"
          className="mt-4 max-w-[150px]"
        />
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-3 justify-start text-muted-foreground group"
        >
          <Search className="h-4 w-4 group-hover:scale-125 group-hover:text-primary transition-transform duration-300" />
          Пошук вакансій
          <span className="flex items-center bg-gray-100 px-2 rounded-md group-hover:bg-black group-hover:text-white transition-colors duration-300">
            <span className="text-lg">⌘</span> + K
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Пошук вакансій</DialogTitle>
          <DialogDescription>
            Введіть назву вакансії, яку ви шукаєте
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Пошук..." value={search} onChange={handleSearch} />
        <ScrollArea className="h-[200px] justify-center flex">
          {renderSearchResultItems()}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
