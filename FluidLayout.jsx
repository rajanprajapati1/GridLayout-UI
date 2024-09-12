import React from 'react';
import { FiImage, FiFileText, FiVideo, FiMusic, FiLink } from 'react-icons/fi';

interface GridItem {
  id: number;
  type: 'image' | 'text' | 'video' | 'audio' | 'link';
  content: string;
  color: string;
}

const gridItems: GridItem[] = [
  { id: 1, type: 'image', content: 'Beautiful Landscape', color: 'bg-blue-500' },
  { id: 2, type: 'text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', color: 'bg-green-500' },
  { id: 3, type: 'video', content: 'Exciting Adventure Video', color: 'bg-red-500' },
  { id: 4, type: 'audio', content: 'Relaxing Nature Sounds', color: 'bg-yellow-500' },
  { id: 5, type: 'link', content: 'Interesting Article', color: 'bg-purple-500' },
  { id: 6, type: 'image', content: 'City Skyline', color: 'bg-indigo-500' },
  { id: 7, type: 'text', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: 'bg-pink-500' },
  { id: 8, type: 'video', content: 'Cooking Tutorial', color: 'bg-teal-500' },
  { id: 9, type: 'audio', content: 'Upbeat Pop Song', color: 'bg-orange-500' },
  { id: 10, type: 'link', content: 'Tech News Update', color: 'bg-cyan-500' },
];

const GridItem: React.FC<{ item: GridItem }> = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'image':
        return <FiImage className="text-2xl" />;
      case 'text':
        return <FiFileText className="text-2xl" />;
      case 'video':
        return <FiVideo className="text-2xl" />;
      case 'audio':
        return <FiMusic className="text-2xl" />;
      case 'link':
        return <FiLink className="text-2xl" />;
    }
  };

  return (
    <div className={`${item.color} p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-white`}>
      {getIcon()}
      <p className="mt-2 text-center">{item.content}</p>
    </div>
  );
};

const FluidGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Fluid Grid Layout</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-fr">
        {gridItems.map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FluidGrid;