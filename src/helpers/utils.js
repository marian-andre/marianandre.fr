export const isCurrentItem = (items, elemIndex, currentIndex) => {
  const ranges = [];
  let previousMaxIndex = 0;

  items.forEach((item, idx) => {
    const min = idx === 0 ? 0 : previousMaxIndex + 1;
    const max = min + (item.width || 1) - 1;

    ranges.push({ min, max });

    previousMaxIndex = max;
  });

  const currentRange = ranges[elemIndex];

  return currentRange.min <= currentIndex && currentIndex <= currentRange.max;
};
