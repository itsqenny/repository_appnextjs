export const getProducts = async () => {
    const res = await fetch('https://repositorydb.onrender.com/products?_page=1&_limit=50',{
    })
    if(!res.ok){
        throw new Error({message: 'invalid products'})
    }
    return res.json()
}