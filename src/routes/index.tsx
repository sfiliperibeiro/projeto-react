import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Meal from "../components/App Food/Meal";
import Recipe from "../components/App Food/Recipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Meal />,
      },
      {
        path: "/:recipeId",
        element: <Recipe />,
      },
     
    ],
  },
], {
  basename: "/projeto-react"
});
