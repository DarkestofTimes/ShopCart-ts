export const handleClick = (id, name, selected, setSelected) => {
  if (selected.some((item) => item.id === id)) {
    setSelected(() => selected.filter((item) => item.id !== id));
  } else {
    setSelected(() => [
      ...selected,
      {
        id,
        name,
      },
    ]);
  }
};
