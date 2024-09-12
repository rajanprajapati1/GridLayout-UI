import React, { useState, useEffect } from 'react';

interface GridItem {
  id: number;
  width: number;
  height: number;
  color: string;
  content: string;
}

const generateRandomItems = (count: number): GridItem[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    width: Math.floor(Math.random() * 200) + 100,
    height: Math.floor(Math.random() * 200) + 100,
    color: `hsl(${Math.random() * 360}, 70%, 70%)`,
    content: `Item ${index + 1}`,
  }));
};

const JustifiedGrid: React.FC = () => {
  const [items, setItems] = useState<GridItem[]>([]);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setItems(generateRandomItems(20));
    const updateWidth = () => {
      const container = document.getElementById('justified-grid-container');
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const getRowLayout = (items: GridItem[], maxWidth: number, targetRowHeight: number) => {
    let currentRow: GridItem[] = [];
    let currentRowWidth = 0;
    const rows: GridItem[][] = [];

    items.forEach((item) => {
      const aspectRatio = item.width / item.height;
      const scaledWidth = targetRowHeight * aspectRatio;

      if (currentRowWidth + scaledWidth > maxWidth && currentRow.length > 0) {
        rows.push(currentRow);
        currentRow = [];
        currentRowWidth = 0;
      }

      currentRow.push(item);
      currentRowWidth += scaledWidth;
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };

  const renderGrid = () => {
    const targetRowHeight = 200;
    const rows = getRowLayout(items, containerWidth, targetRowHeight);

    return rows.map((row, rowIndex) => {
      const rowWidth = row.reduce((sum, item) => sum + (item.width / item.height) * targetRowHeight, 0);
      const scale = containerWidth / rowWidth;

      return (
        <div key={rowIndex} className="flex justify-start w-full mb-1">
          {row.map((item) => {
            const scaledWidth = ((item.width / item.height) * targetRowHeight * scale);
            const scaledHeight = targetRowHeight * scale;

            return (
              <div
                key={item.id}
                className="relative overflow-hidden"
                style={{
                  width: `${scaledWidth}px`,
                  height: `${scaledHeight}px`,
                  backgroundColor: item.color,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Justified Grid Layout</h1>
      <div id="justified-grid-container" className="w-full">
        {renderGrid()}
      </div>
    </div>
  );
};

export default JustifiedGrid;