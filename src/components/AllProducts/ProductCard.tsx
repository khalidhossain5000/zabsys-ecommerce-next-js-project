import Link from "next/link";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { IProduct } from "@/Types/types";
import Button from "../shared/Button/Button";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const price = product.data?.price ?? product.data?.Price;
  const color = product.data?.color ?? product.data?.Color;

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
      {/* Image placeholder  for better view */}
      <div className="flex h-40 items-center justify-center bg-secondary sm:h-48">
        <HiOutlineDeviceTablet
          className="h-12 w-12 text-muted-foreground"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 md:gap-3 p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-card-foreground sm:text-base font-inter">
          {product.name}
        </h3>

        {color && (
          <p className="text-xs text-muted-foreground sm:text-sm font-inter"> Color: {color}</p>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-sm  text-primary-hover font-semibold sm:text-base font-inter">
            {price ? `$${price}` : "Price unavailable"}
          </span>

          <Link
            href={`/products/${product.id}`}
        className="relative"
          >
            <Button className="px-5 rounded-full">Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
