import { createBrowserRouter } from "react-router-dom";
import { RuScreen, RuScreenPath } from "../../features/ru/ru_screen";

export const router = createBrowserRouter([
  {
    path: RuScreenPath,
    element: <RuScreen />,
  },
]);
