"use client"

import Image from "next/image";
import Link from "next/link";


const FilterProduct = ({product}) => {
    return (
        <>
        <div className="item">
            <Link href={`/products/${product.id}`}>
              <div className="item-img-box">
                <div className="item-img-wrapper">
                  <div className="item-img-inner">
                    <Image
                      src={product.img[0]}
                      width={200}
                      height={160}
                      sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                      alt={`${product.name}`}
                      priority={true}
                    />
                  </div>
                </div>
              </div>
              <div className="item-info">
                <h4>{product.price}₽</h4>
                <p>{product.name}</p>
                <button className="add-item">
                  <div className="buy-item">Смотреть подробнее</div>
                </button>
              </div>
            </Link>
          </div>
        </>
    );
};

export default FilterProduct;