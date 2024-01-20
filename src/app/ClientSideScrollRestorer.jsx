"use client"
import { useScrollRestorer } from 'next-scroll-restorer';
const ClientSideScrollRestorer = () => {
    
  if (typeof window !== 'undefined') {

    useScrollRestorer();
  }

  return <></>;
};

export default ClientSideScrollRestorer;