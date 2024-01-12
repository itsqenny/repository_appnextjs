
"use client"


const ProductBasket = ({data}) => {
    console.log(`basket: ${data.basket}`)
    const basketItems = data.basket.map(item => (
        <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Order ID: {item.order_id}</p>
            <p>Price: {item.price}</p>
            <p>Size: {item.size}</p>
            <p>Status: {item.status}</p>
            <p>Time: {item.time}</p>
            <hr />
        </div>
    ));

    return (
        <div>
            <h3>Basket:</h3>
            {basketItems}
        </div>
    );
};

export default ProductBasket;