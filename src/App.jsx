import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";

const theme = {
  color: {
    background: "#0B0D17",
    main: "#D0D6F9",
    white: "#FFFFFF",
  },
  font: {
    title: "'Bellefair', serif",
    subtitle: "'Barlow Condensed', sans-serif",
    text: "'Barlow', sans-serif",
  },
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
