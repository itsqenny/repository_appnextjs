export async function GET(request){
    try {
        const { searchParams } = new URL(request.url);
        const productId = searchParams.get('productId');
        
        const res = await fetch(`http://localhost:3001/products/${productId}`);
        
        // Проверяем, что ответ от сервера успешный
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const productDetail = await res.json();
        
        // Возвращаем детали продукта
        return productDetail;

    } catch (error) {
        console.error("Error fetching product details:", error);
        // Возвращаем ошибку или другую информацию об ошибке
        return { error: "Failed to fetch product details" };
    }
}