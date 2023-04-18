import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import { Login } from "./Pages/Login";
import { UserStorageLogin } from "./Context/useContextLogin";
import { DefaultLayout } from "./components/DefaultLayout";
import { Dashboard } from "./Pages/Rodovia/Dashboard";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { RegisterRoad } from "./Pages/Rodovia/RegisterRoad";
import { RoadCore } from "./Pages/Rodovia/RoadCore";
import { DefaultLayoutRoad } from "./components/DefaultLayoutRoad";
import { RoadInformation } from "./Pages/Rodovia/RoadInformation";

function App() {
  return (
    <BrowserRouter>
      <UserStorageLogin>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/rodovias" element={<DefaultLayout />}>
            <Route
              path="/rodovias"
              element={
                <PrivateRoutes>
                  <Dashboard />
                </PrivateRoutes>
              }
            />
            <Route
              path="/rodovias/registro"
              element={
                <PrivateRoutes>
                  <RegisterRoad />
                </PrivateRoutes>
              }
            />
            <Route
              path="/rodovias/nucleo/:id"
              element={
                <PrivateRoutes>
                  <RoadCore />
                </PrivateRoutes>
              }
            />
            <Route
              path="/rodovias/:id"
              element={
                <PrivateRoutes>
                  <DefaultLayoutRoad />
                </PrivateRoutes>
              }
              >
                <Route
                  path="/rodovias/:id"
                  element={
                    <PrivateRoutes>
                      <RoadInformation />
                    </PrivateRoutes>
                  }
                />
              </Route>
          </Route>
        </Routes>
      </UserStorageLogin>
    </BrowserRouter>
  );
}

export default App;
