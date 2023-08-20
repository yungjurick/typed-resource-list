"use client";

import ResourceListContainer from "@/components/resource/ResourceListContainer";

export default function Home() {
  return (
    <main className="flex h-screen w-full">
      {/* Left Panel */}
      <div className="w-[280px] h-full border-r border-r-[#C4C4C4]">
        <ResourceListContainer />
      </div>

      {/* Right Viewer Area */}
      <div className="w-full h-full flex-1 bg-[#F0F0F0]"></div>
    </main>
  );
}
