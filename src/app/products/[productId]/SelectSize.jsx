'use client'

import initData from "@/app/UI/useInitData/initData";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function SelectSize({ item, onPriceClick, onSizeClick}) {
  const { WebApp } = initData()
    const [activeSize, setActiveSize] = useState(null);
    const [activePrice, setActivePrice] = useState(null);
  const findSizeByPrice = (price) => {
    return Object.keys(item?.size).find((size) => item?.size[size] === price);
  };

  useEffect(() => {
    if (item) {
      const setInitialValues = () => {
        const defaultSize = findSizeByPrice(item.price);
        
        if (defaultSize) {
          setActiveSize(defaultSize);
    setActivePrice(item.size[defaultSize]); // Также устанавливаем активную цену
    onPriceClick(item.size[defaultSize]); // Вызываем функцию обратного вызова для обновления currentPrice
    onSizeClick(defaultSize); // Вызываем функцию обратного вызова для обновления currentSize
        } else if (item.size) {
          const firstSize = Object.keys(item.size)[0];
          setActiveSize(firstSize);
          setActivePrice(item.size[firstSize]);
        }
      };

      setInitialValues();
    }
  }, [item]);

  const handleSizeClick = (size, price) => {
    WebApp.HapticFeedback.impactOccurred('medium');
    setActiveSize(size);
    setActivePrice(price);
    onPriceClick(price); // вызовите функцию обратного вызова здесь
    onSizeClick(size)
  };
  
    return (
        <>
            <div className="size_box">
            {Object.entries(item?.size || {}).map(([size, price]) => (
            <button
            key={size}
            className={`size_button ${activeSize === size ? "active" : ""}`}
            onClick={() => handleSizeClick(size, price)}
            >
            <div className="Story-size-content">
                <div className="size-nubmer">{size}</div>
                <div className="size-price">{price}₽</div>
            </div>
            </button>
        ))}
          </div>
        </>
    );
}