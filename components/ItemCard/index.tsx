export interface ItemCardProps {
  imgUrl: string;
  name: string;
  price: number;
  nbUnits: number;
}

export default function ItemCard({
  imgUrl,
  name,
  price,
  nbUnits,
}: ItemCardProps) {
  return (
    <div className="rounded-lg h-72 bg-itemCard text-center flex flex-col justify-end px-3">
      <p className="text-2xl capitalize">{name}</p>
      <p className="uppercase text-sm  font-bold text-gray-300 mt-5">from</p>
      <p className="text-3xl">{price.toFixed(2)} €</p>
      <p className="text-sm text-gray-400 mt-3 pb-2">
        {nbUnits} unit{nbUnits > 1 ? "s" : ""}
      </p>
    </div>
  );
}
