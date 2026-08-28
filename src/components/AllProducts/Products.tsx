import { getAllProductsData } from '@/lib/api';


const Products = async() => {
    const allProducts=await getAllProductsData()
  console.log(allProducts,"this is all products")
    return (
        <section>
            
        </section>
    );
};

export default Products;