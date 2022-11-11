export const updateObjectInArray = (
  items,
  itemId,
  newPropName,
  newObjProps
) => {
  return items.map((u) => {
    if (u[newPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
