"use client";

import ResourceList from "@/components/resource/list/ResourceList";
import ResourceListHeader from "@/components/resource/list/ResourceListHeader";

export default function Home() {
  return (
    <main className="flex h-screen w-full">
      {/* Left Panel */}
      <div className="w-[280px] h-full border-r border-r-[#C4C4C4] bg-[#F7F7F7] relative">
        <ResourceListHeader />
        <ResourceList />
      </div>

      {/* Right Viewer Area */}
      <div className="w-full h-full flex-1 bg-[#F0F0F0]"></div>
    </main>
  );
}
