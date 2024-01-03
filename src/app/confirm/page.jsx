'use client'
import SelectBonus from "@/app/products/SelectBonus";
import Image from "next/image";
import { useEffect, useState } from "react";
import Checkout from "./checkout";
import Loading from "./loading";
import ButtonCheckout from "@/app/UI/ButtonCheckout/ButtonCheckout"
import Back from "@/app/UI/BackButton/BackButton";
export default function ProductConfirm({searchParams}) {

  const [item, setItem] = useState(null);
  const { id, name, ConfirmPrice, ConfirmSize, orderId } = searchParams;
 
  const [size, setSize] = useState(ConfirmSize || null)
  const [price, setPrice] = useState(ConfirmPrice || null);
  const [isCredited, setCredited] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(true);

  const handlePayment = () => {
    console.log('payment');
    setCredited(true);
    setShowConfirmation(false);
  };
  
useEffect(() => {
    // Выполнение HTTP-запроса
    fetch(`https://repositorydb.onrender.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('500 (Not Found)');
        }
        return response.json();
        
      })
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке продукта:", error);
      });
  }, [id]);

  

  if(!item){
    return <Loading/>
  }
  
  const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

  const srcSet = widths.map((width) => `${item.img}?w=${width}&q=75 ${width}w`).join(', ');
    return (
        <>
        <Back/>
        <div className="confirm-item">
            <div className="images-slider-wrapper">
                <div className="images-slider-images">
                {item?.img.map((img, id) => (
              <div className="images-slider-image-item" key={id}>
                <div className="image-item-wrapper">
                  <Image src={img} alt={`photo-${id}`} 
                   width={3840}
                   height={2160}
                   srcSet={srcSet}
                   sizes="(max-width: 768px) 100vw, 50vw"
                   style={{
                     height: '100%',
                     width: '100%',
                     margin: '4% 0 5% 0',
                     objectFit: 'cover',
                     WebkitUserSelect: 'none',
                     MozUserSelect: 'none',
                     userSelect: 'none',
                     pointerEvents: 'none'
                   }}
                   priority={true}
                    />
                </div>
              </div>
            ))}
                </div>
        </div>
        {showConfirmation ? (
        <>
       <div className="bg-full-item-name">
            <div className="confirm-item-name">{name}
                <span className="confirm-item-size" > размер {size !== null ? size : ConfirmSize} EU</span>
            </div>
        </div>
        <div className="item-order-info">
            <div className="confirm-item-price">
            {price !== ConfirmPrice ? (
                        <>
                        {`${price} ₽`.replace(/(\d)(?=(\d{3})+(?!\d))/g, ' $1 ')}
                            <del style={{ marginLeft: '4px', fontSize: '24px', color: 'var(--tg-hint)' }}>{`${ConfirmPrice}₽`}</del>{" "}
                        </>
                    ):(
                      <>
                      {ConfirmPrice}₽
                      </>
                    )}
              
              </div>
            <div className="public-oferta">
              <p className="public-ofert-text">Оплачивая заказ, вы соглашаетесь с условиями <a className="public-oferta-link">публичной оферты</a></p>
            </div>
            </div>
            <SelectBonus price={ConfirmPrice} setParentPrice={setPrice}/>
            {/* 
            <div className="main-button">
              <button onClick={handlePayment}>Купить за ₽</button>
            </div>
            */}
            {/* 
            <ButtonCheckout handlePayment={handlePayment} price={price !== null ? price : ConfirmPrice} />
          */}
            </>
        ):(
        <>
          <Checkout items={searchParams} isCredited={isCredited} price={price} orderId={orderId}/>
        </>
        )}
            
        </div>


        
        </>
    );
}

