import React, { useState, useEffect } from 'react';

interface MasonryItem {
  id: number;
  height: number;
  color: string;
  content: string;
}

const MasonryGrid: React.FC = () => {
  const [items, setItems] = useState<MasonryItem[]>([]);

  useEffect(() => {
    // Generate random items for the masonry grid
    const generatedItems: MasonryItem[] = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      height: Math.floor(Math.random() * 200) + 100, // Random height between 100px and 300px
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`, // Random color
      content: `Item ${index + 1}`
    }));
    setItems(generatedItems);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Masonry Grid Layout</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-lg"
            style={{ height: `${item.height}px`, backgroundColor: item.color }}
          >
            <div className="p-4 h-full flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;