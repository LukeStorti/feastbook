"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const SearchFilter = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [filter, setFilter] = useState<string>("");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="flex rounded-lg items-center space-x-4 justify-between overflow-hidden px-2 md:px-8 flex-grow">
      <div className="flex items-center border pl-2 rounded-lg max-h-11 w-full">
        <Search />
        <Input
          className="border-none focus-visible:ring-0 focus-visible:outline-none bg-transparent"
          placeholder="Search Recipes"
          onChange={(e) => setFilter(e.target.value)}
          required
        />
        <Button asChild>
          <Link
            href={pathName + "?" + createQueryString("search", filter)}
            className=" rounded-tr rounded-br rounded-tl-none rounded-bl-none px-2 h-11 flex items-center"
          >
            Search
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SearchFilter;
