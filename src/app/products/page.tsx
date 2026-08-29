import Products from "@/components/AllProducts/Products";
import AllProductsSkeleton from "@/components/shared/Loading/Products/AllProductsSkleton";
import { Suspense } from "react";

const AllProductsPage = () => {
  return (
    <div>
      <Suspense fallback={<AllProductsSkeleton />}>
        {" "}
        <Products />
      </Suspense>
    </div>
  );
};

export default AllProductsPage;
