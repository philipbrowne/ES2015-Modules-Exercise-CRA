const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
};

const remove = (items, item) => {
  const index = items.indexOf(item);
  if (index !== -1) {
    items.splice(index, 1);
    return items;
  } else {
    return undefined;
  }
};

export { choice, remove };
