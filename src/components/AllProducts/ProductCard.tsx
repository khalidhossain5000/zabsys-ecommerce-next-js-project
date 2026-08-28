import Link from "next/link";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { IProduct } from "@/Types/types";

interface IProductCardProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
   
    const price = product.data?.price ?? product.data?.Price;
    const color = product.data?.color ?? product.data?.Color;

    return (
        <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
            {/* Image placeholder - for better view */}
            <div className="flex h-40 items-center justify-center bg-secondary sm:h-48">
                <HiOutlineDeviceTablet className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="line-clamp-2 text-sm font-medium text-card-foreground sm:text-base">
                    {product.name}
                </h3>

                {color && (
                    <p className="text-xs text-muted-foreground sm:text-sm">{color}</p>
                )}

                <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-sm font-semibold text-foreground sm:text-base">
                        {price ? `$${price}` : "Price unavailable"}
                    </span>

                    <Link
                        href={`/products/${product.id}`}
                        className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-hover sm:text-sm"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;