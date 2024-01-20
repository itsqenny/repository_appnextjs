"use client"
import { useScrollRestorer } from './UI/ScrollRestoration/index';
const ClientSideScrollRestorer = () => {
    
  if (typeof window !== 'undefined') {

    useScrollRestorer();
  }

  return <></>;
};

export default ClientSideScrollRestorer;