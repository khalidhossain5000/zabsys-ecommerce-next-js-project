import { getAllProductsData } from "@/lib/api";
import Title from "../shared/Title/Title";
import ProductCard from "./ProductCard";
import { IProduct } from "@/Types/types";

const Products = async () => {
  const allProducts = await getAllProductsData();

  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16 xl:py-22 px-4">
      {/* title */}
      <div className="flex flex-col sm:flex-row items-center justify-between ">
        <Title subTitle="Browse our full collection, curated for quality and value">
          All Products
        </Title>
        {/* total product count */}
        <h4 className="font-lora text-sm xl:text-lg pt-2">Showing {allProducts.length} products</h4>
      </div>

      {/* product card */}

      {allProducts && allProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {allProducts.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <h2 className="font-lora text-2xl font-semibold text-slate-900">
            No products found
          </h2>

          <p className="mt-2 text-red-600 font-inter">
            There are no products available right now.
          </p>
        </div>
      )}
    </section>
  );
};

export default Products;
