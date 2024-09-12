import React, { useState, useEffect } from 'react';
import { FiImage, FiFileText, FiVideo, FiMusic, FiLink } from 'react-icons/fi';

interface GridItem {
  id: number;
  type: 'image' | 'text' | 'video' | 'audio' | 'link';
  content: string;
  color: string;
  category: string;
}

const gridItems: GridItem[] = [
  { id: 1, type: 'image', content: 'Beautiful Landscape', color: 'bg-blue-500', category: 'nature' },
  { id: 2, type: 'text', content: 'Lorem ipsum dolor sit amet', color: 'bg-green-500', category: 'article' },
  { id: 3, type: 'video', content: 'Exciting Adventure Video', color: 'bg-red-500', category: 'entertainment' },
  { id: 4, type: 'audio', content: 'Relaxing Nature Sounds', color: 'bg-yellow-500', category: 'nature' },
  { id: 5, type: 'link', content: 'Interesting Article', color: 'bg-purple-500', category: 'article' },
  { id: 6, type: 'image', content: 'City Skyline', color: 'bg-indigo-500', category: 'urban' },
  { id: 7, type: 'text', content: 'Sed do eiusmod tempor incididunt', color: 'bg-pink-500', category: 'article' },
  { id: 8, type: 'video', content: 'Cooking Tutorial', color: 'bg-teal-500', category: 'entertainment' },
  { id: 9, type: 'audio', content: 'Upbeat Pop Song', color: 'bg-orange-500', category: 'entertainment' },
  { id: 10, type: 'link', content: 'Tech News Update', color: 'bg-cyan-500', category: 'article' },
  { id: 11, type: 'image', content: 'Mountain Range', color: 'bg-emerald-500', category: 'nature' },
  { id: 12, type: 'text', content: 'Ut enim ad minim veniam', color: 'bg-rose-500', category: 'article' },
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
    <div className={`${item.color} p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-white h-40`}>
      {getIcon()}
      <p className="mt-2 text-center font-semibold">{item.content}</p>
      <p className="mt-1 text-sm opacity-75">{item.category}</p>
    </div>
  );
};

const IsotopeGrid: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(gridItems);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(gridItems);
    } else {
      setFilteredItems(gridItems.filter(item => item.category === filter));
    }
  }, [filter]);

  const categories = ['all', ...new Set(gridItems.map(item => item.category))];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Isotope Grid Layout</h1>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-500">
        {filteredItems.map(item => (
          <div key={item.id} className="transition-all duration-500 transform hover:scale-105">
            <GridItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsotopeGrid;