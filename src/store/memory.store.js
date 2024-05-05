import { useEffect, useState } from "react";
import { create } from "zustand";

const shopItems = [
  {
    img: `https://api.dicebear.com/8.x/adventurer/svg?seed=liron`,
    type: "adventurer",
    isPossess: true,
    isActive: true,
    price: 0,
  },
  {
    img: `https://api.dicebear.com/8.x/avataaars/svg?seed=liron`,
    type: "avataaars",
    isPossess: false,
    isActive: false,
    price: 100,
  },
  {
    img: `https://api.dicebear.com/8.x/big-ears/svg?seed=liron`,
    type: "big-ears",
    isPossess: false,
    isActive: false,
    price: 100,
  },
  {
    img: `https://api.dicebear.com/8.x/bottts/svg?seed=liron`,
    type: "bottts",
    isPossess: false,
    isActive: false,
    price: 100,
  },
  {
    img: `https://api.dicebear.com/8.x/lorelei/svg?seed=liron`,
    type: "lorelei",
    isPossess: false,
    isActive: false,
    price: 100,
  },
  {
    img: `https://api.dicebear.com/8.x/notionists/svg?seed=liron`,
    type: "notionists",
    isPossess: false,
    isActive: false,
    price: 100,
  },
  {
    img: `https://api.dicebear.com/8.x/pixel-art/svg?seed=liron`,
    type: "pixel-art",
    isPossess: false,
    isActive: false,
    price: 100,
  },
];

export const gameLog = [
  {
    party: "Party 1",
    item: "https://api.dicebear.com/8.x/pixel-art/svg?seed=liron",
    mode: "easy",
    time: "1m02s",
    nbWrong: 10,
  },
];

export const useStoreShop = create((set) => ({
  shopItems: shopItems,
  changeItems: (itemSelect) =>
    set((state) => ({
      shopItems: state.shopItems.map((item) => ({
        ...item,
        isActive: item.type === itemSelect,
      })),
    })),
}));

export const useStoreMode = create((set) => ({
  actifMode: 1,
  setActifMode: (input) =>
    set((state) => {
      const newMode =
        typeof input === "function" ? input(state.actifMode) : input;
      return { actifMode: newMode };
    }),
}));

export const useActiveItems = () => {
  const items = useStoreShop((state) => state.shopItems);
  const [activeItems, setActiveItems] = useState([]);
  const filteredItems = items.filter((item) => item.isActive);
  useEffect(() => {
    const filteredItems = items.filter((item) => item.isActive);
    setActiveItems(filteredItems);
  }, [items]);

  return activeItems.length > 0 ? activeItems : filteredItems;
};
