import { Skeleton } from "@/components/ui/skeleton";

export function NavbarSkeleton() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo Skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-4 w-40" />
        </div>

        {/* Desktop Links Skeleton */}
        <div className="hidden md:flex items-center gap-8">
          {[...Array(7)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-16 rounded" />
          ))}
        </div>

        {/* Mobile Button Skeleton */}
        <div className="md:hidden">
          <Skeleton className="h-6 w-6 rounded-md" />
        </div>
      </div>
    </header>
  );
}
