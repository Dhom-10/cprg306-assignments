"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

type ItemType = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function ItemList() {
  const [sortBy, setSortBy] = useState<"name" | "category">("name");
  const [grouped, setGrouped] = useState(false);

  const items: ItemType[] = [...(itemsData as ItemType[])];

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });

  const handleSortByName = () => {
    setSortBy("name");
    setGrouped(false);
  };

  const handleSortByCategory = () => {
    setSortBy("category");
    setGrouped(false);
  };

  const handleToggleGrouped = () => {
    setGrouped((prev) => !prev);
  };
  if (grouped) {
    const byName = [...items].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    const groupedMap = byName.reduce<Record<string, ItemType[]>>(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      },
      {}
    );

    const categories = Object.keys(groupedMap).sort((a, b) =>
      a.localeCompare(b)
    );

    return (
      <section className="m-4">
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded border border-black ${
              !grouped && sortBy === "name"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={handleSortByName}
          >
            Sort by Name
          </button>

          <button
            className={`px-4 py-2 rounded border border-black ${
              !grouped && sortBy === "category"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={handleSortByCategory}
          >
            Sort by Category
          </button>

          <button
            className={`px-4 py-2 rounded border border-black ${
              grouped ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={handleToggleGrouped}
          >
            Group by Category
          </button>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-6">
            <h2 className="text-xl font-bold capitalize ml-2">{cat}</h2>
            <ul className="list-none p-0">
              {groupedMap[cat].map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
  return (
    <section className="m-4">
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded border border-black ${
            sortBy === "name"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={handleSortByName}
        >
          Sort by Name
        </button>

        <button
          className={`px-4 py-2 rounded border border-black ${
            sortBy === "category"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={handleSortByCategory}
        >
          Sort by Category
        </button>

        <button
          className={`px-4 py-2 rounded border border-black ${
            grouped ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={handleToggleGrouped}
        >
          Group by Category
        </button>
      </div>

      <ul className="list-none p-0">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}
