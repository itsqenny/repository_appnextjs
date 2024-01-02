
export const revalidate = 10;

export async function GET(request){
    const res = await fetch('http://localhost:3001/products?_page=1&_limit=50')
    const items = await res.json()

    return new Response(JSON.stringify(items))
}