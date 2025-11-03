import { Skeleton } from "@/components/ui/skeleton";

export function NavbarSkeletonMobile() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-md" /> {/* Logo Icon */}
          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-28 rounded" /> {/* Perrystown */}
            <Skeleton className="h-2.5 w-16 rounded" /> {/* Orthodontics */}
          </div>
        </div>

        {/* Menu Icon */}
        <Skeleton className="h-5 w-5 rounded" />
      </div>
    </header>
  );
}
