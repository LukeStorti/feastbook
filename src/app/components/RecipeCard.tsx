import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Heart, Utensils } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const RecipeCard = ({
  label,
  mealType,
  image,
  cuisineType,
  link,
  yieldNum,
  calories,
  healthLabels,
  ingredients,
}: {
  label: string;
  image: string;
  yieldNum: number;
  mealType: string[];
  cuisineType: string[];
  link: string;
  calories: number;
  healthLabels: string[];
  ingredients: string[];
}) => {
  return (
    <div className="flex flex-col items-center justify-between border rounded-md">
      <div className="relative bg-gray-200/75 animate-in ">
        <Button className="absolute top-2 right-2" size={"icon"} variant={"secondary"}>
          <Heart />
        </Button>

        <Image
          src={image}
          alt="recipe image"
          width={350}
          height={350}
          className="object-fill rounded-t-md"
        />
      </div>
      <h3 className="my-2 line-clamp-1 px-1 text-center font-semibold">{label}</h3>
      <div className="flex justify-between items-center w-full px-2 mb-2">
        <p className="text-sm text-muted-foreground">{cuisineType}</p>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <Utensils size={15} /> {yieldNum}
        </p>
      </div>
      <div className="flex justify-between items-center w-full px-2 mt-2 mb-4">
        <Button asChild variant={"outline"}>
          <Link href={link} target="_blank">
            Full Recipe
          </Link>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button>View Details</Button>
          </DialogTrigger>
          <DialogContent>
            <div className="flex flex-col justify-center items-center">
              <h3 className="mt-2 px-2 text-center font-semibold">{label}</h3>
              <p className="text-muted-foreground">{mealType}</p>
              <div className="my-2 flex flex-col items-center w-full justify-center">
                <p className="mb-2 font-semibold">
                  Calories: <span className="font-normal">{Math.round(calories)}</span>
                </p>
                <p className="font-semibold">Ingredients:</p>
                <div className="flex flex-col  mb-2">
                  {ingredients.map((item) => (
                    <li key={item} className="text-xs">
                      {item}
                    </li>
                  ))}
                </div>
                <p className="font-semibold">Health Labels:</p>
                <div className="grid grid-cols-3 w-[80%] text-left gap-1 mt-2">
                  {healthLabels.map((item) => (
                    <span key={item} className="text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild className="my-2 w-full">
                <Link href={link} target="_blank">
                  View Full Recipe
                </Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RecipeCard;
