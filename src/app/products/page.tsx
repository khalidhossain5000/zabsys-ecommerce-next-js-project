import Products from "@/components/AllProducts/Products";
import AllProductsSkeleton from "@/components/shared/Loading/Products/AllProductsSkleton";
import Title from "@/components/shared/Title/Title";
import { Suspense } from "react";

const AllProductsPage = () => {
  return (
    <div>
      <Title className="text-center md:text-center pt-12">
        All Products Page Showing All Available Products
      </Title>

      <Suspense fallback={<AllProductsSkeleton />}>
        {" "}
        <Products />
      </Suspense>
    </div>
  );
};

export default AllProductsPage;
