// src/components/apps/AppList.tsx
import { useQuery } from "@tanstack/react-query";
import AppCard from "./AppCard";
import { Skeleton } from "@/components/ui/skeleton";
import { App } from "../../types/index";

export default function AppList() {
  const { data: apps, isLoading } = useQuery({
    queryKey: ["apps"],
    queryFn: async () => {
      // Add API call here
      return [];
    },
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[200px]" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {apps?.map((app: App) => (
        <AppCard key={app?.id} app={app} />
      ))}
    </div>
  );
}
