
export const revalidate = 10;

export async function GET(request){
    const api = process.env.API_PRODUCT_LIST;
    const res = await fetch(`${api}/products?_page=1&_limit=50`)
    const items = await res.json()
    
    return new Response(JSON.stringify(items))
}