'use client'
import { BackButton } from "@twa-dev/sdk/react";

function Back() {
  // Проверяем, определен ли объект window
  if (typeof window === 'undefined') {
    return null; 
  }

  return (
    <>
      <BackButton />
    </>
  );
}

export default Back;