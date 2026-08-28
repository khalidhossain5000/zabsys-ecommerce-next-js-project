import Products from "@/components/AllProducts/Products";

import AllProductsSkeleton from "@/components/shared/Loading/Products/AllProductsSkleton";
import { Suspense } from "react";


export default function Home() {

  return (
    <section >
      <Suspense fallback={<AllProductsSkeleton />}>  <Products /></Suspense>

  
    </section>
  );
}
