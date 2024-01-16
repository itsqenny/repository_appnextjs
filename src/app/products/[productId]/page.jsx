
'use client'
import Link from "next/link"
import SelectSize from "./SelectSize"
import Image from "next/image"
import { useEffect, useState } from "react"
import Loading from "./loading"
import { useParams, useRouter } from 'next/navigation'
import ButtonPayment from "@/app/UI/MainButton/ButtonPayment"
import Back from "@/app/UI/BackButton/BackButton"

export default function ProductId(){
  const params = useParams()
  const router = useRouter()
  const [item, setItem] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [currentSize, setCurrentSize]=useState(null);
  const [addToCart, setAddToCart] = useState(false);
  const [addFavorite, setFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
  useEffect(() => {
    // Выполнение HTTP-запроса
    fetch(`https://repositorydb.onrender.com/products/${params.productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('500 (Not Found)');
        }
        return response.json();
      })
      .then((item) => {
        setItem(item);
        setCurrentPrice(item.price);
        setCurrentSize(item.size)
      })
      .catch((error) => {
        console.error("Ошибка при загрузке продукта:", error);
      });
  }, [params.productId]);

  if(!item){
    return <Loading/>
  }
  
const handlePriceChange = (newPrice) => {
  setCurrentPrice(newPrice);
};
const handleSizeChange = (newSize) => {
  setCurrentSize(newSize);
};
const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
const srcSet = widths.map((width) => `${item.img}?w=${width}&q=75 ${width}w`).join(', ');

const generateOrderId = () => {
  const randomId = Math.floor(0 + Math.random() * 9999999); // Генерируйте случайное шестизначное число
  return `${randomId}`;
};


const uniqueOrderId = generateOrderId();
const isClicked = () => {
  setAddToCart(true);
  setShowPopup(true);
  setTimeout(() => {
    setShowPopup(false);
    setAddToCart(false); // Сбрасываем состояние после определенного времени (если это необходимо)
  }, 2000); 

}


const handleFavorite = () => {
  setFavorite(true);
  setShowPopup(true);
  setTimeout(() => {
    setShowPopup(false);
    setFavorite(false); // Сбрасываем состояние после определенного времени (если это необходимо)
  }, 2000); 
}

const handlePaymentClick = () => {
  const queryParams = {
    id: item.id,
    name: item.name,
    ConfirmPrice: currentPrice,
    ConfirmSize: currentSize,
    orderId: uniqueOrderId,
  };
  const queryString = new URLSearchParams(queryParams).toString();
  router.push(`/confirm/${queryString}`)
  console.log('send data', queryParams);
  
};

  return (
    <>
    <Back/>
      <div className="full-item" >
      <div className="images-slider-wrapper">
        <div className="images-slider-images">
        {item?.img.map((img, id) => (
            <div className="images-slider-image-item" key={id}>
              <div className="image-item-wrapper">
                <Image src={img} alt={`photo-${id}`} 
                 width={3840}  // Начальная ширина изображения
                 height={2160} // Начальная высота изображения (может быть другой, в зависимости от соотношения сторон)
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
      <div className="bg-full-item-name">
        <div className="full-item-name">{item?.name}
        </div>
        </div>
        <div className="item-order-info">
          <p className="full-item-price">{currentPrice}₽</p>
          <hr/>
            <SelectSize item={item} onPriceClick={handlePriceChange} onSizeClick={handleSizeChange}/>
          <hr/>
           <div className="btns-cart">
                <div className={`btn-add-to-cart btns-carts ${addFavorite ? 'add' : 'no'}`} 
                onClick={handleFavorite}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_6_12232)">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="var(--tg-text)"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_6_12232">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                 </div>
                 <div className={`btn-add-to-cart btns-carts ${addToCart ? 'active' : 'passive'}`}
                 onClick={isClicked}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_6_12248)">
                  <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="var(--tg-text)"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_6_12248">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                 </div>
           </div>
          
        </div>
      </div>
      {/*
      <Link href={{
        pathname: '/confirm',
        query:{
          id: item.id,
          name: item.name,
          ConfirmPrice: currentPrice,
          ConfirmSize: currentSize,
          orderId: uniqueOrderId,
        }
      }}>
      */}
          {/*
         <div className="main-button">
              <button onClick={handlePaymentClick}>Перейти к оплате</button>
          </div>
         */}
        
        
          <ButtonPayment handlePaymentClick={handlePaymentClick}/> 
          {/*
        </Link> */}
      {showPopup && (
                    <div className="main-popup">
                      <div className="main-popup show">
                      Добавлено
                      </div>
                     
                    </div>
                  )}
    </>
    )

};