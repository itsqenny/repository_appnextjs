
export const revalidate = 10;

export async function GET(request){
    const res = await fetch('https://repositorydb.onrender.com/products?_page=1&_limit=50')
    const items = await res.json()

    return new Response(JSON.stringify(items))
}