import { BackButton } from "@twa-dev/sdk/react";

function Back() {
  // Проверяем, определен ли объект window
  if (typeof window === 'undefined') {
    return null; // или другая логика, если необходимо
  }

  return (
    <>
      <BackButton />
    </>
  );
}

export default Back;