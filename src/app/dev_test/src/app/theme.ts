// theme.ts
import { extendTheme } from "@chakra-ui/react";

// Определение вашей цветовой палитры
const colors = {
  brand: {
    50: "#e3f2f9",
    100: "#c5e4f3",
    200: "#a2d4ec",
    300: "#7ac1e4",
    400: "#47a9da",
    500: "#0088cc",  // основной цвет для вашего бренда
    600: "#007ab8",
    700: "#006ba1",
    800: "#005885",
    900: "#003f5e",
  },
};

// Определение вашей темы, расширяя базовую тему Chakra UI
const customTheme = extendTheme({
  colors, // подключаем цвета бренда
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'Roboto', sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.600",
        bg: "gray.50",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default customTheme;
