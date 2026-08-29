import ProductDetails from "@/components/ProductDetailsPage/ProductDetails";
import ProductDetailsSkeleton from "@/components/shared/Loading/Products/ProductDetailsSkleton";
import { getProductDetails } from "@/lib/api";
import { Suspense } from "react";

interface IParamsProps {
    params: Promise<{ id: string }>;
}
const ProductsDetailsPage = async ({ params }: IParamsProps) => {
    const { id } = await params;
    const productDetails = await getProductDetails(id);

    return (
        <div>
            <Suspense fallback={<ProductDetailsSkeleton />}>
                <ProductDetails product={productDetails} />
            </Suspense>


        </div>
    );
};

export default ProductsDetailsPage;
