"use client"
import { useScrollRestorer } from 'next-scroll-restorer';
import eruda from 'eruda'
const ClientSideScrollRestorer = () => {
    
  if (typeof window !== 'undefined') {

      eruda.init();
    useScrollRestorer();
  }

  return <></>;
};

export default ClientSideScrollRestorer;