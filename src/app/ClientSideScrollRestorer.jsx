"use client"
import  useScrollRestorer  from './UI/ScrollRestoration/useScrollRestorer';
const ClientSideScrollRestorer = () => {
    
  if (typeof window !== 'undefined') {

    useScrollRestorer();
  }

  return <></>;
};

export default ClientSideScrollRestorer;