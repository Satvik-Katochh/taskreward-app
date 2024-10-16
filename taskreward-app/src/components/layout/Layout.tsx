import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Toaster />
    </div>
  );
}
