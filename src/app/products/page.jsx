
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "./getProducts";

export default async function Products({searchQuery}) {
    let items = await getProducts();

    if (searchQuery) {
        items = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return(
    <>
    <main>
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <Link href={`/products/${item.id}`}>
                            <div className="item-img">
                                <Image src={item.img[0]} 
                                 width={200}
                                 height={160}
                                 sizes="(max-width: 768px) 100vw,
                                       (max-width: 1200px) 50vw,
                                       33vw"
                                 style={{  height:'100%',width: '100%', borderRadius:'17px', WebkitUserSelect:'none', MozUserSelect:'none', userSelect:'none' }}
                                 
                                 alt={`${item.name}`}
                                 priority={true}
                                 />
                            </div>
                            <div className="item-info">
                                <h4>{item.price}₽</h4>
                                <p>{item.name}</p>
                                <button className="add-item">
                                    <div className="buy-item">Купить</div>
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </main>
    </>
    )
}
