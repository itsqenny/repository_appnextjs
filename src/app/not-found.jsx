import Link from "next/link";


function NotFound() {
    return (
        <>
            <p style={{textAlign:'center', marginTop: '20%'}}>такой страницы не существует.</p>
            <div className="main-button">
                <Link 
                href='/'
                >
                    <button>Вернуться назад</button>
                </Link>
            </div>
        </>
    );
}

export default NotFound;