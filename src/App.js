import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//redux
import { useSelector } from "react-redux";
//routes data
import routes from "./router";
import { themes } from "./styles/theme";
import { Navbar, Footer } from "./components/base";
//css
import GlobalStyles from "./styles/Global";

function App() {
  const { theme } = useSelector((state) => state);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Navbar />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
