export const useTheme = (theme) => {
    if (typeof document !== 'undefined') {
        document.querySelector("html")?.setAttribute("data-theme", theme);
      }
  };