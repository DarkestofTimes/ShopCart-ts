interface item {
  id: number;
  slug: string;
  name: string;
  games_count: number;
}

export const handleClick = (
  id: number,
  name: string,
  selected: item[],
  setSelected: React.Dispatch<React.SetStateAction<item[]>>
) => {
  if (selected.some((item: item) => item.id === id)) {
    setSelected(() => selected.filter((item: item) => item.id !== id));
  } else {
    setSelected(() => [
      ...selected,
      {
        id,
        slug: "",
        name,
        games_count: 0,
      },
    ]);
  }
};
