import { useKeenSlider } from "keen-slider/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CaretRight, PlusCircle } from "@phosphor-icons/react";
import "../../../Global/slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import { api } from "../../../lib/api";

export function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  let stretch = null;
  //responsividade do slider
  const breakpoints = {
    // Largura mínima de 640 pixels
    240: {
      slidesPerView: 1.3,
    },
    440: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2.5,
    },
    // Largura maior que 640 pixels
    1000: {
      slidesPerView: 3.5,
    },

    1200: {
      slidesPerView: 3.8,
    },

    1800: {
      slidesPerView: 6.5,
    },
  };

  // faz a requisição ao banco de dados
  useEffect(() => {
    async function GetRoads() {
      const token = window.localStorage.getItem("encibraapptoken-v2");
      const response = await api.get("/road", {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      setData(response.data);
    }
    GetRoads();
  }, []);

  // função para contar quantidade de rodovias por nucleo
  const someRoadRegional = data.reduce(
    (acc, road) => {
      switch (road.regional) {
        case "01":
          acc.reginal01 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual01 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal01 += 1;
            acc.totalFeferal += 1;
          }
          break;
        case "02":
          acc.reginal02 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual02 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal02 += 1;
            acc.totalFeferal += 1;
          }
          break;
        case "03":
          acc.reginal03 += 1;
          acc.total += 1;

          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual03 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal03 += 1;
            acc.totalFeferal += 1;
          }
          break;
        case "04":
          acc.reginal04 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual04 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal04 += 1;
            acc.totalFeferal += 1;
          }
          break;
        case "05":
          acc.reginal05 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual05 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal05 += 1;
            acc.totalFeferal += 1;
          }
          break;
        case "06":
          acc.reginal06 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual06 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal06 += 1;
            acc.totalFeferal += 1;
          }
          break;
        case "07":
          acc.reginal07 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual07 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal07 += 1;
            acc.totalFeferal += 1;
          }
          break;
        case "08":
          acc.reginal08 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual08 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal08 += 1;
            acc.totalFeferal += 1;
          }
          break;

        case "09":
          acc.reginal09 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual09 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal09 += 1;
            acc.totalFeferal += 1;
          }
          break;
        case "10":
          acc.reginal10 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual10 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal10 += 1;
            acc.totalFeferal += 1;
          }
          break;
        default:
          break;
      }
      return acc;
    },
    {
      reginal01: 0,
      reginal02: 0,
      reginal03: 0,
      reginal04: 0,
      reginal05: 0,
      reginal06: 0,
      reginal07: 0,
      reginal08: 0,
      reginal09: 0,
      reginal10: 0,
      meshEstadual01: 0,
      meshEstadual02: 0,
      meshEstadual03: 0,
      meshEstadual04: 0,
      meshEstadual05: 0,
      meshEstadual06: 0,
      meshEstadual07: 0,
      meshEstadual08: 0,
      meshEstadual09: 0,
      meshEstadual10: 0,
      meshFederal01: 0,
      meshFederal02: 0,
      meshFederal03: 0,
      meshFederal04: 0,
      meshFederal05: 0,
      meshFederal06: 0,
      meshFederal07: 0,
      meshFederal08: 0,
      meshFederal09: 0,
      meshFederal10: 0,
      totalEstadual: 0,
      totalFeferal: 0,
      total: 0,
    }
  );

  if (data.stretch) {
    stretch = JSON.parse(road?.stretch);
  }

  return (
    <section className="w-full overflow-y-scroll ">
      <header className="flex justify-between pr-5 pt-5 pb-8 items-center">
        <strong className="text-2xl">Rodovias</strong>
        <NavLink
          className="flex items-center gap-1 hover:text-gold-400 hover:underline"
          to="/rodovias/registro"
        >
          <PlusCircle className="text-gold-400" size={22} />
          Cadastrar Rodovia
        </NavLink>
      </header>

      {/**Slider */}
      <nav className="pr-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={4.5}
          breakpoints={breakpoints}
          className=" mb-8 cursor-pointer pr-5"
        >
          {/**total */}
          <SwiperSlide
            width={200}
            className="w-72 bg-gray-300 min-w-52 p-4 rounded-lg text-center text-text-100 border-b-4 border-white rounded-md  border-b-8 "
          >
            <h1 className="text-xl font-bold">Total de Rodovias</h1>
            <h2 className="pt-2.5 text-3xl font-bold">
              {someRoadRegional.total}
            </h2>
            <p className="mb-2.5">Total</p>
            <div className="flex justify-center gap-8">
              <p className="flex flex-col">
                {" "}
                <span>{someRoadRegional.totalEstadual}</span>{" "}
                <span>Estaduais</span>
              </p>
              <p className="flex flex-col">
                {" "}
                <span>{someRoadRegional.totalFeferal}</span>{" "}
                <span>Federais</span>
              </p>
            </div>
          </SwiperSlide>

          {/**01 */}
          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${1}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 01</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal01}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual01}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal01}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          {/**02 */}
          <SwiperSlide className="text-gray-400  w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${2}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 02</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal02}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual02}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal02}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          {/**03 */}
          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${3}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 03</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal03}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual03}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal03}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          {/**04 */}
          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${4}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 04</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal04}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual04}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal04}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          {/**05 */}
          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${5}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 05</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal05}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual05}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal05}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          {/**06 */}
          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${6}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 06</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal06}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual06}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal06}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          {/**07 */}
          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${7}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 07</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal07}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual07}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal07}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          {/**08 */}
          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${8}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 08</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal08}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual08}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal08}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          {/**09 */}
          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${9}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 09</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal09}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual09}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual09}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>

          <SwiperSlide className="text-gray-400 w-72 bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${10}`}>
              <h1 className="text-xl font-bold">Núcleo Regional 10</h1>
              <h2 className="pt-2.5 text-3xl font-bold">
                {someRoadRegional.reginal10}
              </h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshEstadual10}</span>{" "}
                  <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.meshFederal10}</span>{" "}
                  <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </nav>

      <div className="pr-5 mb-5">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-gray-300 ">
              <th className="p-2 rounded-ss-md">Rodovia</th>
              <th className="p-2">Malha</th>
              <th className="p-2">Extensão</th>
              <th className="p-2">Latitude</th>
              <th className="p-2">Longitude</th>
              <th className="p-2">UF</th>
              <th className="p-2 rounded-se-md text-center"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((road) => {
              return (
                <tr
                  onClick={() => {
                    navigate(`/rodovias/information/${road.id}`);
                  }}
                  className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
                >
                  <td className="p-2  ">{road.acronym}</td>
                  <td className="p-2  ">{road.mesh}</td>
                  <td className="p-2  ">{road.extention}</td>
                  <td className="p-2  ">{stretch?.initialLatitude}</td>
                  <td className="p-2  ">{stretch?.initialLongitude}</td>
                  <td className="p-2  ">{road.uf}</td>
                  <td className="p-2  ">
                    <Link
                      className="flex justify-center"
                      to={`/rodovias/information/${road.id}`}
                    >
                      <CaretRight size={20} />
                    </Link>
                  </td>
                </tr>
              );
            })}
            <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
              <td colSpan={7} className="p-2 rounded-ee-md rounded-es-md"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
