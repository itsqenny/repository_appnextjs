import FetcherProducts from "./FetcherProducts";


const ProductPage = ({searchParams}) => {
    return (
        <>
        <FetcherProducts searchParams={searchParams}/>
        </>
    );
};

export default ProductPage;