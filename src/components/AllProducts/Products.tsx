import { getAllProductsData } from '@/lib/api';
import Title from '../shared/Title/Title';


const Products = async() => {
    const allProducts=await getAllProductsData()
  console.log(allProducts,"this is all products")
    return (
        <section className="max-w-7xl mx-auto py-12 md:py-16 xl:py-22">
            {/* title */}
            <div className='flex flex-col sm:flex-row items-center justify-between '>
                <Title subTitle='Browse our full collection, curated for quality and value'>All Products</Title>
            {/* total product count */}
                <h4>Showing {allProducts.length} products</h4>
            </div>

            {/* product card */}
            <div>
            
            </div>
        </section>
    );
};

export default Products;