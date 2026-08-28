import ProductDetails from "@/components/ProductDetailsPage/ProductDetails";
import { getProductDetails } from "@/lib/api";

interface IParamsProps {
  params: Promise<{ id: string }>;
}
const ProductsDetailsPage = async ({params}:IParamsProps) => {
    const {id}=await params
    const productDetails=await getProductDetails(id)

    console.log(productDetails,'this is the details')
    return (
        <div>
            <ProductDetails product={productDetails}/>
        </div>
    );
};

export default ProductsDetailsPage;