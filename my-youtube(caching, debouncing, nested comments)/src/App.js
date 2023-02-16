import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import MainContainer from "./components/MainContainer";

const router = createBrowserRouter([{
  path: "/",
  element : <Body />,
  children : [
    {
      path : "/",
      element : <MainContainer />
    },
    {
      path : "watch",
      element : <Watch />
    }
  ]
}]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router = {router} />
    </Provider>
  );
}

export default App;

/**
 * Header
 * Body
 *  -sidebar
 *      -menuItems
 *  -MainContainer
 *    -Buttons
 *    -VideoContainer
 *    -Videos

 */