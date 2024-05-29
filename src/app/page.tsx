import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import RecipeList from "./components/RecipeList";
import emptySearch from "../../public/emptySearch.png";

export default function Home({ searchParams }: { searchParams: { search?: string } }) {
  return (
    <MaxWidthWrapper>
      {searchParams.search ? (
        <RecipeList search={searchParams.search} />
      ) : (
        <div className="justify-center items-center flex flex-col mt-8">
          <Image src={emptySearch} alt="empty search image" width={350} height={350} />
          <p className="text-muted-foreground">Search for a recipe</p>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
