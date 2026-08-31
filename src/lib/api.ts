import { IProduct } from "@/Types/types"

export const getAllProductsData = async (): Promise<IProduct[]> => {
    const res = await fetch("https://api.restful-api.dev/objects", {
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 1,
            tags: ["all-products"]
        }
    })

    const result = await res.json()

    return result
}

export const getProductDetails = async (
  id: string
): Promise<IProduct | null> => {
  const res = await fetch(
    `https://api.restful-api.dev/objects/${id}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60,
        tags: [`product-details`],
      },
    }
  );

  if (!res.ok) {
    return null;
  }
  console.log(res,'thi sis res')
 
  const result: IProduct = await res.json();

  return result;
};




