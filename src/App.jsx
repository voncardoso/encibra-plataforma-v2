import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { UserStorageLogin } from "./Context/useContextLogin";
import { DefaultLayout } from "./components/DefaultLayout";
import { Dashboard } from "./Pages/Rodovia/Dashboard";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { RegisterRoad } from "./Pages/Rodovia/RegisterRoad";
import { RoadCore } from "./Pages/Rodovia/RoadCore";
import { DefaultLayoutRoad } from "./components/DefaultLayoutRoad";
import { RoadInformation } from "./Pages/Rodovia/RoadInformation";
import { Points } from "./Pages/Rodovia/Points";
import { Revestment } from "./Pages/Rodovia/Revestiment";
import { CityInformation } from "./Pages/Rodovia/CityInformation";
import { List } from "./Pages/Videos/List";
import { DefaultLayoutVideos } from "./components/DefaultLayoutVideos";
import { Information } from "./Pages/Videos/Information";
import "./global.css";

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
              path="/rodovias/"
              exact
              element={
                <PrivateRoutes>
                  <DefaultLayoutRoad />
                </PrivateRoutes>
              }
              >
                <Route
                  path="/rodovias/information/:id"
                  exact
                  element={
                    <PrivateRoutes>
                      <RoadInformation />
                    </PrivateRoutes>
                  }
                />

                <Route
                  path="/rodovias/municipios/:id"
                  element={
                    <PrivateRoutes>
                      <CityInformation />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="/rodovias/pontos/:id"
                  element={
                    <PrivateRoutes>
                      <Points />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="/rodovias/resvestimento/:id"
                  element={
                    <PrivateRoutes>
                      <Revestment />
                    </PrivateRoutes>
                  }
                />

                <Route
                  path="/rodovias/videos/:id"
                  element={
                    <PrivateRoutes>
                      <List />
                    </PrivateRoutes>
                  }
                />

                <Route path="/rodovias/videos/:id/information/:video"
                  element={
                    <PrivateRoutes>
                      <DefaultLayoutVideos />
                    </PrivateRoutes>
                  }>

                <Route
                  path="/rodovias/videos/:id/information/:video"
                  element={
                    <PrivateRoutes>
                      <Information />
                    </PrivateRoutes>
                  }
                />

                </Route>
                
              </Route>
          </Route>
        </Routes>
      </UserStorageLogin>
    </BrowserRouter>
  );
}

export default App;
