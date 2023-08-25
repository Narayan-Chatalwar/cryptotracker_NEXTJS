"use client";

import "../app/globals.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AppContext from "./Context/AppContext";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./Components/Theme";
import { ThemeProvider } from "@emotion/react";

export default function RootLayout({ children }) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [default1s, setDefault] = useState(false);

  useEffect(() => {
    setCurrentTheme(default1s ? darkTheme : lightTheme);
  }, [default1s]);

  return (
    <html lang="en">
      <body className="mainapp">
        <ThemeProvider theme={currentTheme}>
          <AppContext>
            <Header default1s={default1s} setDefault={setDefault} />
            {children}
            {/* <Footer /> */}
          </AppContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
