"use client"
import { useParams } from "next/navigation";
import PhotoIdFetcher from "./PhotoIdFetcher";
import initData  from "@/app/UI/useInitData/initData";
const CustomerPage = () => {
  const params = useParams()
  const {customerId} = params
  const { user } = initData()
  //const user = { username: 'whokilledravey', first_name: 'Евгений'}
  return (
    <>
      <PhotoIdFetcher customerId={customerId} user={user}/>
    </>
  );
};

export default CustomerPage;