import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "light",
    components: {
      MuiSelect: {
        // Adjust the text color here
        styleOverrides: {
          icon: {
            color: "#000", // Change this to your desired text color
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#808080",
    },
    type: "dark",
    components: {
      MuiSelect: {
        // Adjust the text color here
        styleOverrides: {
          icon: {
            color: "#fff", // Change this to your desired text color
          },
        },
      },
    },
  },
});
