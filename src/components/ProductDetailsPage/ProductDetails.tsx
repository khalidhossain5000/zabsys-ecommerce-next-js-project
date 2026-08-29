import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineDeviceTablet } from "react-icons/hi2";
import { IProduct } from "@/Types/types";
import Title from "../shared/Title/Title";

interface IProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: IProductDetailsProps) => {
  const price = product.data?.price ?? product.data?.Price;

  const specs = product.data
    ? Object.entries(product.data).filter(
        ([key]) => key.toLowerCase() !== "price"
      )
    : []; //since key is diffrent in each res

  return (
    <section className="mx-auto max-w-6xl px-3 py-10 sm:px-6">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary font-inter transition-colors hover:text-primary"
      >
        <HiOutlineArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to products
      </Link>

      <div className="mt-8 md:mt-12 overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid gap-0 sm:grid-cols-2">
          <div className="flex h-64 items-center justify-center bg-secondary sm:h-full">
            <HiOutlineDeviceTablet
              className="h-20 w-20 text-muted-foreground"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col gap-4 p-4 sm:p-8">
            <div>
              <Title className="px-0 text-lg md:text-xl xl:text-2xl">
                {" "}
                {product.name}
              </Title>
            </div>

            <p className="text-xl font-bold text-center md:text-left text-foreground font-inter">
              Price : {price ? `$${price}` : "Price unavailable"}
            </p>

            {specs.length > 0 ? (
              <div className="border-t border-primary/50 pt-4">
                <h2 className="mb-3 font-inter text-sm font-medium text-card-foreground text-center md:text-left ">
                  Specifications
                </h2>
                <dl className="flex flex-col gap-2">
                  {specs.map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between border-b border-border pb-2 text-sm last:border-0 pr-2"
                    >
                      <dt className="capitalize text-muted-foreground font-lora">
                        {key}
                      </dt>
                      <dd className=" md:font-medium  font-lora text-accent text-center sm:text-[initial]">
                        {String(value)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : (
              <p className="border-t border-border pt-4 text-sm text-muted-foreground">
                No additional details available for this product.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
