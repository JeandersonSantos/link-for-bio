import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CustomTheme } from "./themes";

function App() {
  const customTheme = CustomTheme();
  return (
    <ThemeProvider theme={customTheme}>
      {/* <Routers /> */}
    </ThemeProvider>
  );
}

export default App;
