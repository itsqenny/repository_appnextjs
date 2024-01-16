'use client'
import Validation from "../UI/getUserId/Validation";
import initData from "../UI/useInitData/initData";
import useWebApp from "../UI/useWebApp/useWebApp";
import PhotoFetcher from "./PhotoFetcher";


export default function Customer(){
    const { user, userId } = initData();
    useWebApp();
    //const userId = '2046881841'
    //const user = { username: 'whokilledravey', first_name: 'Евгений'}
    return (
        <> 
        <Validation/>
           
            <PhotoFetcher userId={userId} user={user}/>
        </>
    );
};


