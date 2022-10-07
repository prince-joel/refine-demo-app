import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  LightTheme,
} from "@pankod/refine-mui";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
