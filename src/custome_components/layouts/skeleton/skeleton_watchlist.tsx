import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonWatchlist() {
  return (
    <>
      <div className="mb-4 flex w-full justify-between px-7">
        <div className="flex items-center gap-x-3">
          <div>
            <Skeleton className="mb-2 h-5 w-28 bg-light-gray-1" />

            <Skeleton className="h-4 w-8 bg-light-gray-1" />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex flex-col items-end">
            <Skeleton className="mb-2 h-5 w-20 bg-light-gray-1" />

            <Skeleton className="h-4 w-10 bg-light-gray-1" />
          </div>
          <div className="relative h-14 w-14 rounded-none bg-light-gray-1 hover:bg-light-gray-1">
            <div className="absolute bottom-0 right-full h-[70px] w-0.5 bg-light-gray-1" />
            <div className="absolute bottom-full right-0 h-0.5 w-32 bg-light-gray-1" />
          </div>
        </div>
      </div>
      <div className="mb-4 flex w-full justify-between px-7">
        <div className="flex items-center gap-x-3">
          <div>
            <Skeleton className="mb-2 h-5 w-28 bg-light-gray-1" />

            <Skeleton className="h-4 w-8 bg-light-gray-1" />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex flex-col items-end">
            <Skeleton className="mb-2 h-5 w-20 bg-light-gray-1" />

            <Skeleton className="h-4 w-10 bg-light-gray-1" />
          </div>
          <div className="relative h-14 w-14 rounded-none bg-light-gray-1 hover:bg-light-gray-1">
            <div className="absolute bottom-0 right-full h-[70px] w-0.5 bg-light-gray-1" />
            <div className="absolute bottom-full right-0 h-0.5 w-32 bg-light-gray-1" />
          </div>
        </div>
      </div>
      <div className="mb-4 flex w-full justify-between px-7">
        <div className="flex items-center gap-x-3">
          <div>
            <Skeleton className="mb-2 h-5 w-28 bg-light-gray-1" />

            <Skeleton className="h-4 w-8 bg-light-gray-1" />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex flex-col items-end">
            <Skeleton className="mb-2 h-5 w-20 bg-light-gray-1" />

            <Skeleton className="h-4 w-10 bg-light-gray-1" />
          </div>
          <div className="relative h-14 w-14 rounded-none bg-light-gray-1 hover:bg-light-gray-1">
            <div className="absolute bottom-0 right-full h-[70px] w-0.5 bg-light-gray-1" />
            <div className="absolute bottom-full right-0 h-0.5 w-32 bg-light-gray-1" />
          </div>
        </div>
      </div>
    </>
  );
}
