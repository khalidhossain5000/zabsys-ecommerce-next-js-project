import Products from "@/components/AllProducts/Products";
import GlobalLoading from "@/components/shared/Loading/GlobalLoading/GlobalLoading";
import AllProductsSkeleton from "@/components/shared/Loading/Products/AllProductsSkleton";
import { Suspense } from "react";


export default function Home() {

  return (
    <section >
      <Suspense fallback={<AllProductsSkeleton />}>  <Products /></Suspense>

      <GlobalLoading/>
    </section>
  );
}
