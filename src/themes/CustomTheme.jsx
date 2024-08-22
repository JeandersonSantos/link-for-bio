import { createTheme } from "@mui/material/styles";

export const CustomTheme = () => {
  const themeCustom = createTheme({
    breakpoints: {
      values: {
        xs0: 0,
        xs1: 375,
        xs: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: "#f0cdd3",
            borderColor: "#f0cdd3",
            borderRadius: "20px",
            "&:hover": {
              borderColor: "#d09b9d",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#f0cdd3",
            borderColor: "#f0cdd3",
            borderRadius: "20px",
            "&:hover": {
              borderColor: "#d09b9d",
            },
          },
        },
      },
    },
  });

  return themeCustom;
};
