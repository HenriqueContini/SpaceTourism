import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#0B0D17",
  main: "#D0D6F9",
  white: "#FFFFFF",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>App</h1>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
