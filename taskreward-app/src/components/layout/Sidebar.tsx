// src/components/layout/Sidebar.tsx
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Home, Plus, User, CheckSquare, Settings } from "lucide-react";

const adminRoutes = [
  { path: "/admin", icon: Home, label: "Dashboard" },
  { path: "/admin/add-app", icon: Plus, label: "Add App" },
];

const userRoutes = [
  { path: "/dashboard", icon: Home, label: "Dashboard" },
  { path: "/tasks", icon: CheckSquare, label: "Tasks" },
  { path: "/profile", icon: User, label: "Profile" },
];

export default function Sidebar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin"); // Replace with actual auth logic
  const routes = isAdmin ? adminRoutes : userRoutes;

  return (
    <aside className="border-r bg-background/95 backdrop-blur w-64 h-[calc(100vh-3.5rem)]">
      <nav className="space-y-2 p-4">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              location.pathname === route.path
                ? "bg-secondary text-secondary-foreground"
                : "hover:bg-secondary/80"
            )}
          >
            <route.icon className="h-4 w-4" />
            {route.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
