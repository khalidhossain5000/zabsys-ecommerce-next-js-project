export const getAllProductsData=async()=>{
    const res=await fetch("https://api.restful-api.dev/objects",{
        cache:"force-cache",
        next:{
            revalidate:60*60*1,
            tags:["all-products"]
        }
    })

    const result=await res.json()

    return result
}