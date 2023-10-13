import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";

const theme = {
  background: "#0B0D17",
  main: "#D0D6F9",
  white: "#FFFFFF",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
