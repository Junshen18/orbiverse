"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useNavigation } from "@/context/NavigationContext";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { OrbGallery } from "@/components/dashboard/OrbGallery";
import { AIAgent } from "@/components/ui/AIAgent";

export default function Dashboard() {
  const [filter, setFilter] = useState({
    search: "",
    emotion: "all",
    status: "all",
    sortBy: "date",
  });

  return (
    <main className="min-h-screen bg-background p-8">
      <DashboardHeader />
      <FilterBar filter={filter} setFilter={setFilter} />
      <OrbGallery filter={filter} />
      <AIAgent />
    </main>
  );
}
