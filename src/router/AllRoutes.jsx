import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routesConfig";


export default function AllRoutes() {
  return (
    <Routes>
      {
        PUBLIC_ROUTES.map(({ key, Component, path }) => (
          <Route key={key} path={path} element={<Component />} />
        ))
      }
    </Routes>
  )
}