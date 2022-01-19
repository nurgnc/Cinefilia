import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//routes data
import routes from "./router";
import { theme } from "./styles/theme";
import { Navbar, Footer } from "./components/base";
//css
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
