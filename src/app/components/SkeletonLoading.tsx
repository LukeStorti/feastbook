import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoading = () => {
  return (
    <div className="flex flex-col items-center rounded-md">
      <Skeleton className="h-[250px] w-full " />
    </div>
  );
};

export default SkeletonLoading;
