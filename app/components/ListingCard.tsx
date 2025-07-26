import Image from "next/image";
import { searchItem } from "../types/app";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";

type listingCardProps = Omit<searchItem, "long" | "lat">;
const ListingCard = ({
  img,
  title,
  location,
  description,
  star,
  price,
  total,
}: listingCardProps) => {
  return (
    <div className="flex px-2 py-2 rounded-2xl bg-amber-50 cursor-pointer pr-4 hover:opacity-80 hover:shadow-xl hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-24 w-40 md:h-52 md:w-80 shrink-0">
        <Image
          src={img}
          fill
          className="object-cover rounded-2xl"
          alt={title}
        />
      </div>
      <div className="flex flex-col grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl after:border-b w-fit after:pt-2 after:block after:w-full">{title}</h4>
        <p className="pt-2 text-sm text-gray-500 grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
            <p className="flex items-center">
                <StarIcon className="h-5 text-red-400" />
                {star}
            </p>
            <div>
                <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                <p className="text-right font-extralight">{total}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
