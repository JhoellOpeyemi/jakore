import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styled/Global.styled";

import Root from "./components/Root";
import Home from "./components/pages/Home";
import Music from "./components/pages/Music";
import Videos from "./components/pages/Videos";
import { theme } from "./theme";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/videos" element={<Videos />} />
      </Route>
    )
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </>
  );
}

export default App;
