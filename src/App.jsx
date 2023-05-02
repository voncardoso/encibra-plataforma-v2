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
import { Patology } from "./Pages/Videos/Patology";
import { UserStorageRoad } from "./Context/useContextRoad";
import { RegisterVideo } from "./Pages/Videos/RegisterVideo";
import { DefaultLayoutUser } from "./components/DefaultLayoutUser";
import { DashboardUser } from "./Pages/User/Dashboard";
import { RegisterUser } from "./Pages/User/Register";
import "./global.css";
import { UserInformation } from "./Pages/User/UserInformation";

function App() {
  return (
    <BrowserRouter>
      <UserStorageLogin>
        <UserStorageRoad>
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

                  <Route
                    path="/rodovias/videos/:id/cadastro"
                    element={
                      <PrivateRoutes>
                        <RegisterVideo />
                      </PrivateRoutes>
                    }
                  />

                <Route
                  path="/rodovias/videos/:id"
                  element={
                    <PrivateRoutes>
                      <DefaultLayoutVideos />
                    </PrivateRoutes>
                  }
                >
                  <Route
                    path="/rodovias/videos/:id/information/:video"
                    element={
                      <PrivateRoutes>
                        <Information />
                      </PrivateRoutes>
                    }
                  />

                  <Route
                    path="/rodovias/videos/:id/patology/:video"
                    element={
                      <PrivateRoutes>
                        <Patology />
                      </PrivateRoutes>
                    }
                  />
                </Route>
              </Route>


            </Route>

            <Route path="/user" element={<DefaultLayoutUser/>}>
              <Route
                path="/user"
                element={
                  <PrivateRoutes>
                    <DashboardUser  />
                  </PrivateRoutes>
                }
              />
              <Route
                path="/user/registro"
                element={
                  <PrivateRoutes>
                    <RegisterUser  />
                  </PrivateRoutes>
                }
              />
              <Route
                path="/user/:id"
                element={
                  <PrivateRoutes>
                    <UserInformation  />
                  </PrivateRoutes>
                }
              />
            </Route>
          </Routes>
        </UserStorageRoad>
      </UserStorageLogin>
    </BrowserRouter>
  );
}

export default App;
