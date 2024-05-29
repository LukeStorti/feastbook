"use client";
import { getRecipe } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import RecipeCard from "./RecipeCard";
import SkeletonLoading from "./SkeletonLoading";
import noResults from "../../../public/noResults.png";
import Image from "next/image";

export interface RecipeProps {
  recipe: {
    label: string;
    image: string;
    mealType: string[];
    cuisineType: string[];
    url: string;
    yield: number;
    calories: number;
    healthLabels: string[];
    ingredientLines: string[];
  };
  _links: {
    self: {
      href: string;
    };
  };
}

const RecipeList = ({ search }: { search: string | undefined }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["recipe", search],
    queryFn: async () => await getRecipe(search ?? ""),
  });

  if (isLoading)
    return (
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 lg:mt-16">
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
        <SkeletonLoading />
      </div>
    );

  return (
    <>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4  md:grid-cols-2 gap-8 mt-8 lg:mt-16 mb-8 ">
        {data?.hits.map((item: RecipeProps, index: number) => (
          <RecipeCard
            key={index}
            label={item.recipe.label}
            image={item.recipe.image}
            mealType={item.recipe.mealType}
            cuisineType={item.recipe.cuisineType}
            link={item.recipe.url}
            yieldNum={item.recipe.yield}
            calories={item.recipe.calories}
            healthLabels={item.recipe.healthLabels}
            ingredients={item.recipe.ingredientLines}
          />
        ))}
      </div>

      {data?.hits.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center ">
          <Image src={noResults} alt="no results image" width={350} height={350} />
          <p className="text-center text-xl">
            Oops! No results for this search! Try something else...
          </p>
        </div>
      )}
      {search === "" && <>Search for a recipe</>}
    </>
  );
};

export default RecipeList;
