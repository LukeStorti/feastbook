import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getRecipe(query: string) {
  if (query?.length <= 0) {
    throw new Error("Search cannot be empty");
  } else {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=%20${process.env.NEXT_PUBLIC_API_KEY}`
    );

    return res.data;
  }
}
