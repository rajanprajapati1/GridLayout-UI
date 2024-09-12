import React from 'react';
import { FiImage, FiFileText, FiVideo, FiMusic, FiLink, FiCalendar, FiBarChart2, FiUser } from 'react-icons/fi';

interface GridItem {
  id: number;
  type: 'image' | 'text' | 'video' | 'audio' | 'link' | 'calendar' | 'chart' | 'profile';
  content: string;
  color: string;
  span?: {
    row?: number;
    col?: number;
  };
}

const gridItems: GridItem[] = [
  { id: 1, type: 'image', content: 'Beautiful Landscape', color: 'bg-blue-500', span: { row: 2, col: 2 } },
  { id: 2, type: 'text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', color: 'bg-green-500' },
  { id: 3, type: 'video', content: 'Exciting Adventure Video', color: 'bg-red-500', span: { col: 2 } },
  { id: 4, type: 'audio', content: 'Relaxing Nature Sounds', color: 'bg-yellow-500' },
  { id: 5, type: 'link', content: 'Interesting Article', color: 'bg-purple-500' },
  { id: 6, type: 'calendar', content: 'Upcoming Events', color: 'bg-indigo-500', span: { row: 2 } },
  { id: 7, type: 'chart', content: 'Monthly Statistics', color: 'bg-pink-500', span: { col: 2 } },
  { id: 8, type: 'profile', content: 'User Profile', color: 'bg-teal-500' },
  { id: 9, type: 'text', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: 'bg-orange-500' },
  { id: 10, type: 'image', content: 'City Skyline', color: 'bg-cyan-500' },
];

const GridItem: React.FC<{ item: GridItem }> = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'image':
        return <FiImage className="text-3xl" />;
      case 'text':
        return <FiFileText className="text-3xl" />;
      case 'video':
        return <FiVideo className="text-3xl" />;
      case 'audio':
        return <FiMusic className="text-3xl" />;
      case 'link':
        return <FiLink className="text-3xl" />;
      case 'calendar':
        return <FiCalendar className="text-3xl" />;
      case 'chart':
        return <FiBarChart2 className="text-3xl" />;
      case 'profile':
        return <FiUser className="text-3xl" />;
    }
  };

  const spanClasses = `${item.span?.row ? `row-span-${item.span.row}` : ''} ${item.span?.col ? `col-span-${item.span.col}` : ''}`;

  return (
    <div className={`${item.color} ${spanClasses} p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-white`}>
      {getIcon()}
      <p className="mt-2 text-center font-semibold">{item.content}</p>
    </div>
  );
};

const StackedGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Stacked Grid Layout</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
        {gridItems.map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default StackedGrid;