'use client'

import { BackButton } from "@twa-dev/sdk/react"

function Back(){
    if (typeof window === 'undefined') {
        return null;
      }

    return (
    <>
    <BackButton/>
    </>);
};

export default Back;