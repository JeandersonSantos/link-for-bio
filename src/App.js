import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CustomTheme } from "./themes";
import Routers from "./routers";

function App() {
  const customTheme = CustomTheme();
  return (
    <ThemeProvider theme={customTheme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
