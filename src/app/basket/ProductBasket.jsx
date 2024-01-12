
"use client"


const ProductBasket = ({data}) => {
    
    const basketItems = data.basket.map((item) => (
        <div key={item.order_id}>
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