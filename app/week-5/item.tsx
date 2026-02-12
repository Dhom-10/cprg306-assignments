interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="bg-white border border-black p-4 m-2 rounded text-black">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
