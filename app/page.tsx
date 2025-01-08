"use client";

import { FadeInImage } from "@/components/fade-in-image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl flex flex-col justify-center mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Skeleton Image Loading Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Fast loading image */}
        <div className="h-64">
          <FadeInImage
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="Demo image 1"
            priority
          />
        </div>

        {/* Slow loading image */}
        <div className="h-64">
          <FadeInImage
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80"
            alt="Demo image 2"
          />
        </div>

        {/* Another slow loading image */}
        <div className="h-64">
          <FadeInImage
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=60"
            alt="Demo image 3"
          />
        </div>
      </div>

      <div className="mt-8 text-gray-400">
        <p>This demo showcases:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Skeleton loading state while images load</li>
          <li>Smooth fade-in transition when images are ready</li>
          <li>Priority loading for important images</li>
          <li>Responsive grid layout</li>
        </ul>
      </div>
    </main>
  );
}
