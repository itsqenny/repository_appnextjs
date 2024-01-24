export const getProducts = async () => {
    const res = await fetch('/api/products',{
    })
    if(!res.ok){
        throw new Error({message: 'invalid products'})
    }
    return res.json()
}