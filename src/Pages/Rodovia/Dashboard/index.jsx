import { useKeenSlider } from "keen-slider/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CaretRight, MagnifyingGlass, PlusCircle } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { api } from "../../../lib/api";
import Pagination from '@mui/material/Pagination';

import 'swiper/swiper.min.css'; 
import { MapDashboard } from "./Map";

export function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredRoad, setFilteredRoad] = useState([]);
  const [seach, setSeach] = useState("")
  const [activeMapa, setActiveMapa] = useState(true)
  let stretch = null;
  //responsividade do slider
  const breakpoints = {
    autoHeight: true,
    // Largura mínima de 640 pixels
    240: {
      slidesPerView: 5.5,
      
    },
    440: {
      slidesPerView: 5.5,
     
    },
    640: {
      slidesPerView: 5.5,
     
    },
    // Largura maior que 640 pixels
    1000: {
      slidesPerView: 5.5,
     
    },

    1200: {
      slidesPerView: 5.5,
     
    },

    1800: {
      slidesPerView: 5.5,
     
    },
  };

  const slideStyle = {
    height: '200px', // Altura desejada para o slide
  };

  // faz a requisição ao banco de dados
  useEffect(() => {
    async function GetRoads() {
      const token = window.localStorage.getItem("encibraapptoken-v2");
      const response = await api.get("/road", {
        headers: { Authorization: "Bearer " + token },
      });
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
            acc.meshFederal01 += 1;
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
            acc.meshFederal10 += 1;
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

  if (data?.stretch) {
    stretch = JSON.parse(data?.stretch);
  }

  // criar paginação
  function paginate(items, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
  
  const paginatedData = paginate(data, currentPage, itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  function goToPage(event, pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() =>{
    if(seach.length > 0){
      setFilteredRoad(data.filter((item) => item.acronym.toLocaleUpperCase().includes(seach.toLocaleUpperCase())))
    }else if(seach.length === 0){
      setFilteredRoad([])
    }
  }, [seach])

   // criar paginação
  function paginate(items, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
  const paginatedDataFilter = paginate(filteredRoad, currentPage, itemsPerPage);
  const totalPagesFilter = Math.ceil(filteredRoad.length / itemsPerPage);
  
  function goToPage(event, pageNumber) {
    setCurrentPage(pageNumber);
  }


  let setHeightSlider = 0

    function teste(){
      console.log(window.innerHeight)
      if(window.innerHeight > 810){
        setHeightSlider =6
      }
      if(window.innerHeight < 810){
        setHeightSlider =5
      }
      if(window.innerHeight < 670){
        setHeightSlider =4
      }
      if(window.innerHeight <= 545){
        setHeightSlider =3
      }

      if(window.innerHeight <= 400){
        setHeightSlider =25
      }

      if(window.innerHeight <= 322){
        setHeightSlider =2
      }
    }
    teste()

  console.log(setHeightSlider)

  return (
    <section className="w-full overflow-y-scroll ">
       

      <div className="w-full flex justify-between h-screen">
          <div className="w-full">
              {/**Mapa */}
              {activeMapa && <div className="w-full h-full fixed">
                  <MapDashboard/>
              </div>}
              {!activeMapa &&  
                <>
                  <div className="py-4 flex justify-end">
                    <label className="flex items-center" htmlFor="">
                      <MagnifyingGlass size={22} className="relative left-8 text-gray-400"/>
                        <input
                          type="text"
                          className="w-60 bg-gray-input rounded-md p-2 pl-10"
                          placeholder="Buscar rodovia"
                          value={seach}
                          onChange={(event) => setSeach(event.target.value)}
                        />
                    </label>
                  </div>
                    <div className="pr-5 mb-5 flex flex-col">
                        <table className="w-full text-center">
                          <thead>
                            <tr className="bg-gray-300 ">
                              <th className="p-2 pl-4 rounded-ss-md text-left ">Rodovia</th>
                              <th className="p-2">Malha</th>
                              <th className="p-2">Extensão</th>
                              <th className="p-2">Latitude</th>
                              <th className="p-2">Longitude</th>
                              <th className="p-2">UF</th>
                              <th className="p-2 rounded-se-md text-center"></th>
                            </tr>
                          </thead>
                          <tbody>
                           {filteredRoad.length > 0 ?  
                           paginatedDataFilter.sort(function (a, b) {
                            return a.acronym < b.acronym ? -1 : a.acronym > b.acronym ? 1 : 0;
                          }).map((road) => {
                              stretch = JSON.parse(road?.stretch);
                              return (
                                <tr
                                  key={road.id}
                                  onClick={() => {
                                    navigate(`/rodovias/information/${road.id}`);
                                  }}
                                  className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
                                >
                                  <td className="p-2 pl-4  text-left">{road.acronym}</td>
                                  <td className="p-2  ">{road.mesh}</td>
                                  <td className="p-2  ">{road.extention}</td>
                                  <td className="p-2  ">{stretch?.initialLatitude}</td>
                                  <td className="p-2  ">{stretch?.initialLongitude}</td>
                                  <td className="p-2  ">{road.uf}</td>
                                  <td className="p-2  ">
                                    <Link
                                      className="flex justify-center"
                                      to={``}
                                    >
                                      <CaretRight size={20} />
                                    </Link>
                                  </td>
                                </tr>
                              );
                            }) :  
                            paginatedData.sort(function (a, b) {
                              return a.acronym < b.acronym ? -1 : a.acronym > b.acronym ? 1 : 0;
                            }).map((road) => {
                              stretch = JSON.parse(road?.stretch);
                              return (
                                <tr
                                  key={road.id}
                                  onClick={() => {
                                    navigate(`/rodovias/information/${road.id}`);
                                  }}
                                  className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
                                >
                                  <td className="p-2 pl-4 text-left">{road.acronym}</td>
                                  <td className="p-2  ">{road.mesh}</td>
                                  <td className="p-2  ">{road.extention}</td>
                                  <td className="p-2  ">{stretch?.initialLatitude}</td>
                                  <td className="p-2  ">{stretch?.initialLongitude}</td>
                                  <td className="p-2  ">{road.uf}</td>
                                  <td className="p-2  ">
                                    <Link
                                      className="flex justify-center"
                                      to={``}
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
                        <div className="mx-auto flex items-center">
                          <Pagination className="mt-2.5" count={filteredRoad.length > 0 ? totalPagesFilter : totalPages} onChange={goToPage}  shape="rounded" />
                        </div>
                    </div>
                </>
                }
                </div>
                {/**Slider */}
              <nav className="pr-1 mb-2">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={setHeightSlider}

                  direction="vertical"
                  autoHeight={true}
                  className=" mb-8 cursor-pointer  h-screen"
                >
                  {/**total */}
                  <SwiperSlide
                    className="w-52 mt-4 bg-gray-300 p-4 rounded-lg text-center text-text-100 border-b-4 border-white rounded-md  border-b-8 "
                  >
                    <h1 className="text-lg font-bold">Total de Rodovias</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.total}
                    </h2>
                    <p className="mb-2.5">Total</p>
                    
                    
                  </SwiperSlide>

                  {/**01 */}
                  <SwiperSlide  className=" text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${1}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 01</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.reginal01}
                    </h2>
                    <p className="mb-2.5">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  {/**02 */}
                  <SwiperSlide 
                   style={slideStyle}
                  className="flex justify-center  items-centertext-gray-400  w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${2}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 02</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.reginal02}
                    </h2>
                    <p className="mb-2.5">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  {/**03 */}
                  <SwiperSlide className="text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${3}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 03</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.reginal03}
                    </h2>
                    <p className="mb-2.5">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  {/**04 */}
                  <SwiperSlide className="text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${4}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 04</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.reginal04}
                    </h2>
                    <p className="mb-2.5">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  {/**05 */}
                  <SwiperSlide className="text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${5}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 05</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.reginal05}
                    </h2>
                    <p className="mb-2.5">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  {/**06 */}
                  <SwiperSlide className="text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${6}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 06</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.reginal06}
                    </h2>
                    <p className="mb-2.5">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  {/**07 */}
                  <SwiperSlide className="text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${7}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 07</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.reginal07}
                    </h2>
                    <p className="mb-2.5">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  {/**08 */}
                  <SwiperSlide className="text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${8}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 08</h1>
                    <h2 className="pt-2.5 text-2xl font-bold">
                      {someRoadRegional.reginal08}
                    </h2>
                    <p className="mb-2">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  {/**09 */}
                  <SwiperSlide className="text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${9}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 09</h1>
                    <h2 className="pt-2.5 text-2xl font-bold">
                      {someRoadRegional.reginal09}
                    </h2>
                    <p className="mb-2">Total</p>
                  </NavLink>
                  </SwiperSlide>

                  <SwiperSlide className="mb-4 text-gray-400 w-52  bg-white min-w-52 p-4 rounded-lg text-center  border-b-4 rounded-md text-center border-b-8 border-gray-300">
                  <NavLink to={`/rodovias/nucleo/${10}`}>
                    <h1 className="text-lg font-bold">Núcleo Regional 10</h1>
                    <h2 className="pt-2 text-2xl font-bold">
                      {someRoadRegional.reginal10}
                    </h2>
                    <p className="mb-2.5">Total</p>
                  </NavLink>
                  </SwiperSlide>
                  </Swiper>
              </nav>
      </div>
    </section>
  );
}
